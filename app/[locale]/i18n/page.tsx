"use client"
import React from 'react'
import { useI18n, useScopedI18n } from '@/locales/client'

function NextInternationalPage() {
  const t = useI18n()
  return (
    <div className='w-screen h-screen flex items-center justify-center text-lg font-[Vazir]'>
      <span className='text-4xl bg-zinc-800 font-black  p-5 rounded-lg border-4 border-zinc-300'>
        {t('hello')}
      </span>
    </div>
  )
}

export default NextInternationalPage