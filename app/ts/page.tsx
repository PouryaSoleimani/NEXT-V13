import React from 'react'
import { result, LoginFunction, ReturnProductStatus } from './typescript'


const TsTrainingPage = () => {

  // console.info('RESULT =>', result)

  const _Result = LoginFunction('Ali', '123456')
  console.info('RESULT ==> ', _Result)

  ReturnProductStatus('PENDING')
  
  return (
    <div>
      <h1 className='text-4xl font-bold bg-blue-700 py-5 text-center w-fit px-4 rounded-lg mx-auto my-5 border-b-4 border-white'>TypeScript Training</h1>
      <a href="/about" id='LINK'></a>
    </div>
  )
}

export default TsTrainingPage