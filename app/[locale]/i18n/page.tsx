"use client"
import React from 'react'
import { useI18n, useScopedI18n, useChangeLocale } from '@/locales/client'

function NextInternationalPage() {
  const changeLocale = useChangeLocale()
  const t = useI18n()

  return (
    <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center text-lg font-[Vazir]'>
      <span className='text-4xl bg-zinc-800 font-black  p-5 rounded-lg border-4 border-zinc-300'>
        {t('hello')}
      </span>
      <div className='flex items-center gap-3'>
        <button className='p-2 rounded-lg border-2 border-zinc-300 w-16 text-center bg-green-600' onClick={() => changeLocale('en')}>EN</button>
        <button className='p-2 rounded-lg border-2 border-zinc-300 w-16 text-center bg-red-600' onClick={() => changeLocale('fa')}>FA</button>
      </div>
    </div>
  )
}

export default NextInternationalPage