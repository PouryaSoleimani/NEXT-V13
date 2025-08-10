"use client"
import React from 'react'
import { useI18n, useScopedI18n } from '@/locales/client'

function NextInternationalPage() {
  const t = useI18n()
  return (
    <div>{t('hello')}</div>
  )
}

export default NextInternationalPage