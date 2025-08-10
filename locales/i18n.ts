import { createI18n } from 'next-international';

export const { useI18n, I18nProvider , useCurrentLocale } = createI18n({
  en: () => import('./en'),
  fa: () => import('./fa'),
});