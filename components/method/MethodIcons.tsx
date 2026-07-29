'use client';

import type { Icon } from '@phosphor-icons/react';
import { BinocularsIcon } from '@phosphor-icons/react/dist/csr/Binoculars';
import { CodeIcon } from '@phosphor-icons/react/dist/csr/Code';
import { HeadsetIcon } from '@phosphor-icons/react/dist/csr/Headset';
import { RocketLaunchIcon } from '@phosphor-icons/react/dist/csr/RocketLaunch';
import { SwatchesIcon } from '@phosphor-icons/react/dist/csr/Swatches';

const STEP_KEYS = ['step1', 'step2', 'step3', 'step4', 'step5'] as const;

export type MethodStepKey = (typeof STEP_KEYS)[number];

const STEP_ICONS: Record<MethodStepKey, Icon> = {
  step1: BinocularsIcon,
  step2: SwatchesIcon,
  step3: CodeIcon,
  step4: RocketLaunchIcon,
  step5: HeadsetIcon,
};

const ANIMATION_CLASS: Record<MethodStepKey, string> = {
  step1: 'method-ph-animate-discovery',
  step2: 'method-ph-animate-design',
  step3: 'method-ph-animate-development',
  step4: 'method-ph-animate-delivery',
  step5: 'method-ph-animate-followup',
};

type MethodStepIconProps = {
  stepKey: MethodStepKey;
};

export function MethodStepIcon({ stepKey }: MethodStepIconProps) {
  const IconComponent = STEP_ICONS[stepKey];

  return (
    <IconComponent
      weight="duotone"
      size={56}
      aria-hidden
      className={`method-ph-icon ${ANIMATION_CLASS[stepKey]}`}
    />
  );
}

export { STEP_KEYS };
