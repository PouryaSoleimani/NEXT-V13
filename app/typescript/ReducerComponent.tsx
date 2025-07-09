import React from 'react'

const ReducerComponent = () => {
  return (
    <div className='bg-zinc-900 p-6 w-fit text-2xl mx-auto rounded-xl border-2 my-6'>
      <h2>Count : 0</h2>
      <div className='flex items-center gap-5 my-5'>
        <button className='bg-emerald-800 text-white p-2 rounded-lg font-bold'>Increment</button>
        <button className='bg-red-800 text-white p-2 rounded-lg font-bold'>Decrement</button>
        <button className='bg-blue-800 text-white p-2 rounded-lg font-bold'>Reset</button>
      </div>
    </div>
  )
}

export default ReducerComponent