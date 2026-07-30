/**
 * Procedural UI sounds via Web Audio API.
 * Inspired by jib.design’s swell/tick approach, with original tunings.
 */

type SwellDirection = 'up' | 'down';
type TickDirection = 'next' | 'prev';

const SOUNDS_ENABLED_KEY = 'ui-sounds-enabled';
export const UI_SOUNDS_CHANGED_EVENT = 'ui-sounds-changed';

let audioContext: AudioContext | null = null;

export function areSoundsEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  return window.localStorage.getItem(SOUNDS_ENABLED_KEY) !== 'false';
}

export function setSoundsEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SOUNDS_ENABLED_KEY, enabled ? 'true' : 'false');
  window.dispatchEvent(new CustomEvent(UI_SOUNDS_CHANGED_EVENT, { detail: { enabled } }));
}

export function toggleSoundsEnabled(): boolean {
  const next = !areSoundsEnabled();
  setSoundsEnabled(next);
  return next;
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  if (!audioContext) {
    const AudioCtx =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    audioContext = new AudioCtx();
  }

  if (audioContext.state !== 'running') {
    void audioContext.resume();
  }

  return audioContext;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function playNoiseTick(
  ctx: AudioContext,
  startTime: number,
  duration: number,
  frequency: number,
  q: number,
  gainValue: number,
) {
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (2 * Math.random() - 1) * (1 - i / data.length);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = frequency;
  filter.Q.value = q;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(gainValue, startTime);
  gain.gain.exponentialRampToValueAtTime(1e-4, startTime + Math.max(duration, 0.02));

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(startTime);
}

type SwellConfig = {
  duration: number;
  peakGain: number;
  attack: number;
  wave: OscillatorType;
  upFreq: [number, number];
  downFreq: [number, number];
  upFilter: [number, number];
  downFilter: [number, number];
  /** Optional second oscillator (octave / fifth) for a distinct character */
  overtone?: { ratio: number; gain: number };
};

function playSwell(direction: SwellDirection, config: SwellConfig) {
  if (prefersReducedMotion() || !areSoundsEnabled()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const start = ctx.currentTime + 0.015;
  const end = start + config.duration - 0.03;
  const [freqFrom, freqTo] = direction === 'up' ? config.upFreq : config.downFreq;
  const [filterFrom, filterTo] = direction === 'up' ? config.upFilter : config.downFilter;

  const master = ctx.createGain();
  master.gain.setValueAtTime(1e-4, start);
  master.gain.exponentialRampToValueAtTime(config.peakGain, start + config.attack);
  master.gain.exponentialRampToValueAtTime(1e-4, start + config.duration);

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(filterFrom, start);
  filter.frequency.exponentialRampToValueAtTime(filterTo, end);
  filter.connect(master);
  master.connect(ctx.destination);

  const osc = ctx.createOscillator();
  osc.type = config.wave;
  osc.frequency.setValueAtTime(freqFrom, start);
  osc.frequency.exponentialRampToValueAtTime(freqTo, end);
  osc.connect(filter);
  osc.start(start);
  osc.stop(start + config.duration + 0.04);

  if (config.overtone) {
    const overtoneGain = ctx.createGain();
    overtoneGain.gain.value = config.overtone.gain;
    overtoneGain.connect(filter);

    const overtone = ctx.createOscillator();
    overtone.type = config.wave;
    overtone.frequency.setValueAtTime(freqFrom * config.overtone.ratio, start);
    overtone.frequency.exponentialRampToValueAtTime(freqTo * config.overtone.ratio, end);
    overtone.connect(overtoneGain);
    overtone.start(start);
    overtone.stop(start + config.duration + 0.04);
  }
}

/** Short dual noise tick — carousel / project navigation. */
export function playGalleryTick(direction: TickDirection = 'next') {
  if (prefersReducedMotion() || !areSoundsEnabled()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const start = ctx.currentTime + 0.02;
  const pitch = direction === 'next' ? 1 : 0.84;

  playNoiseTick(ctx, start, 0.011, 4200 * pitch, 1.5, 0.28);
  playNoiseTick(ctx, start + 0.018, 0.014, 3200 * pitch, 1.2, 0.17);
}

/**
 * Theme toggle swell — warm triangle glide (distinct from jib’s sine 330↔494).
 * Dark→light = up; light→dark = down.
 */
export function playThemeSwell(direction: SwellDirection) {
  playSwell(direction, {
    duration: 0.36,
    peakGain: 0.12,
    attack: 0.04,
    wave: 'triangle',
    upFreq: [294, 440],
    downFreq: [440, 294],
    upFilter: [650, 2600],
    downFilter: [2600, 620],
  });
}

/**
 * Language toggle swell — brighter sine + soft fifth overtone.
 * Same family as theme, but a clearer / slightly higher character.
 */
export function playLocaleSwell(direction: SwellDirection = 'up') {
  playSwell(direction, {
    duration: 0.3,
    peakGain: 0.11,
    attack: 0.03,
    wave: 'sine',
    upFreq: [370, 554],
    downFreq: [554, 370],
    upFilter: [900, 3600],
    downFilter: [3600, 850],
    overtone: { ratio: 1.5, gain: 0.22 },
  });
}

/** @deprecated Prefer playLocaleSwell — kept as alias for existing call sites. */
export function playLocaleTick() {
  playLocaleSwell('up');
}
