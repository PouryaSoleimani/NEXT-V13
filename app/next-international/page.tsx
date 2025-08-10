'use client'
import React from 'react'
import { useI18n } from '@/locales/client'
function NextInterNationalPage() {
  const t = useI18n()
  return (
    <div>
      <h1>{t('hello')}</h1>
      <h1>{t('hello.world')}</h1>
      <h1>{t('welcome', { name: 'Pourya' })}</h1>
    </div>
  )
}

export default NextInterNationalPage