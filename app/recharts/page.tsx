'use client'
import { Card } from '@/components/ui/card'
import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
const RechartsPage = () => {
  const data = [
    { year: '2016', angular: '24', vue: '32', react: '37' },
    { year: '2017', angular: '54', vue: '36', react: '12' },
    { year: '2018', angular: '32', vue: '31', react: '47' },
    { year: '2018', angular: '75', vue: '44', react: '75' },
    { year: '2020', angular: '34', vue: '38', react: '32' },
    { year: '2021', angular: '56', vue: '46', react: '67' },
    { year: '2022', angular: '41', vue: '52', react: '71' },
  ]
  return (
    <div className='w-screen h-screen grid place-items-center-safe'>
      <Card className='bg-black/30 p-3 '>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'black' }} />
          <Legend />
          <Bar dataKey="vue" fill="#17f16b" />
          <Bar dataKey="react" fill="#4036f9" />
          <Bar dataKey="angular" fill="#fb0f0f" />
        </BarChart>
      </Card>
    </div>
  )
}

export default RechartsPage