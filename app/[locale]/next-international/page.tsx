"use client"
import React from 'react'
import { useI18n, useScopedI18n } from '@/locales/client'

function NextInterNationalPage() {
  const t = useI18n()
  const scopedT = useScopedI18n('hello')

  return (
    <div className='text-3xl font-bold w-full h-screen flex items-center justify-center'>{t('hello.world')}</div>
  )
}

export default NextInterNationalPage