'use client';
import React from 'react';
import { useI18n, useScopedI18n, useChangeLocale } from '@/locales/client';
import Header from '../_components/Header';

function NextInternationalPage() {
  const t = useI18n();

  return (
    <div className="w-screen h-screen flex flex-col gap-5 items-center justify-between text-lg font-[Vazir]">
      <Header />
      <span className="text-md w-[80%] bg-zinc-800 font-medium text-zinc-300  p-5 rounded-lg border-4 border-zinc-300">
        {t('text')}
      </span>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg border-2 border-zinc-300 w-16 text-center bg-green-600">EN</button>
      </div>
    </div>
  );
}

export default NextInternationalPage;
