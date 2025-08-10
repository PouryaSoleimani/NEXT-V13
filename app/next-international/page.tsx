import React from 'react'
import { useI18n } from '@/locales/i18n';
import { useCurrentLocale } from '@/locales/i18n';

function NextInterNationalPage() {
  const locale = useCurrentLocale();
  return (
    <div>{locale}</div>
  )
}

export default NextInterNationalPage