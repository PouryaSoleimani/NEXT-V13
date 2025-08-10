// app/[locale]/client/layout.tsx
import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'
import { LoaderCircle } from 'lucide-react'

export default async function SubLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params

  return (
    <I18nProviderClient
      locale={locale}
      fallback={<div className='w-screen h-screen flex gap-3 items-center justify-center'> <LoaderCircle className='size-12 animate-spin text-yellow-500' /> Loading ... </div>}
    >
      {children}
    </I18nProviderClient>
  )
}