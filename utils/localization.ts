import { useLocale } from 'next-intl';

export type LocalizedString = string | { en: string; fr: string };
export type LocaleCode = 'en' | 'fr';

export function resolveLocalizedValue(value: LocalizedString, locale: LocaleCode): string {
  if (typeof value === 'string') return value;
  return value[locale] ?? value.en;
}

export function useLocalizedValue() {
  const locale = useLocale() as LocaleCode;
  return (value: LocalizedString): string => resolveLocalizedValue(value, locale);
}
