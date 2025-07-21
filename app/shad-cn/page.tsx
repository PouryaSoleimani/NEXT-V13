"use client"
import React from 'react'
import { Separator } from '@radix-ui/react-separator'

import BreadCrumbComponent from './_components/BreadCrumbComponent'
import TabsComponent from './_components/TabsComponent'
import ThemeToggleComponent from './_components/ThemeToggleComponent'
import CardComponent from './_components/CardComponent'


function ShadCnPage() {

  return (
    <section className='container border mx-auto my-5 rounded-2xl border-zinc-950 bg-zinc-800 p-3'>

      <ThemeToggleComponent />

      <BreadCrumbComponent />

      <Separator orientation='horizontal' className='w-[98%] mx-auto my-4 h-1 bg-zinc-900 ' />

      <div className='flex items-center-safe'>

        <TabsComponent />

        <Separator orientation='vertical' className='h-90 w-1 mx-4 bg-zinc-900' />

        <CardComponent />

      </div>

    </section>
  )
}

export default ShadCnPage