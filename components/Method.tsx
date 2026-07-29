"use client";

import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';
import { MethodStepIcon, STEP_KEYS } from './method/MethodIcons';

/** h-14 (3.5rem) + my-3 top (0.75rem) + half dot (0.5rem) */
const TIMELINE_LINE_TOP = '4.75rem';

const timelineDotClassName =
  'h-4 w-4 rounded-full border-2 border-white bg-[#eef7f7] dark:bg-[#0f1117]';

export default function Method() {
  const t = useTranslations('method');

  return (
    <div id="method" className="mb-12">
      <AnimatedSection delay={125} className="mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          {t('label')}
        </p>
      </AnimatedSection>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-[34px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 lg:hidden"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute left-0 right-0 hidden h-px bg-gray-200 dark:bg-gray-700 lg:block"
          style={{ top: TIMELINE_LINE_TOP }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
          {STEP_KEYS.map((stepKey, index) => {
            const isConditional = stepKey === 'step3';

            return (
              <AnimatedSection key={stepKey} delay={index * 75} className="relative">
                <div className="relative pl-16 lg:pl-0">
                  <div className="mb-4 flex h-14 items-center lg:hidden">
                    <MethodStepIcon stepKey={stepKey} />
                  </div>

                  <div className="hidden lg:flex lg:flex-col">
                    <div className="flex h-14 items-end">
                      <MethodStepIcon stepKey={stepKey} />
                    </div>

                    <div
                      className="relative z-10 my-3 flex h-4 w-4 shrink-0 items-center"
                      aria-hidden="true"
                    >
                      <span className={timelineDotClassName} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="relative flex flex-wrap items-center gap-2">
                      <div
                        className="pointer-events-none absolute -left-[38px] top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center lg:hidden"
                        aria-hidden="true"
                      >
                        <span className={`block h-4 w-4 shrink-0 ${timelineDotClassName}`} />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-200 tracking-tight">
                        <span className="font-mono text-sm text-gray-500 dark:text-gray-500 mr-2">
                          0{index + 1}.
                        </span>
                        {t(`steps.${stepKey}.title`)}
                      </h3>

                      {isConditional && (
                        <span className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {t('conditionalTag')}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      {t(`steps.${stepKey}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
