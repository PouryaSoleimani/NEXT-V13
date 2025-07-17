import React from 'react'
import { LoginFunction, ReturnProductStatus } from './typescript'
import Logger from '@/hooks/Logger'
import { _ApiResponse } from './typescript'
import './typescript'
import { newCar2 } from './typescript'

const TsTrainingPage = () => {

  // console.info('RESULT =>', result)


  class PersonExtended {
    static Log() { console.info('log from class') }
    constructor(private password: string, readonly username: string) { }
    get getPassword() { return this.password }
    set setPassword(newPassword: string) { this.password = newPassword }
  }

  const newPerson = new PersonExtended('12345', 'PouryaSoleimani')

  console.info('%c PASSWORD ---->', 'color:cyan', newPerson.getPassword);
  console.info('%c READ ONLY -->', 'color:cyan', newPerson.username);
  newPerson.setPassword = 'NEW PASSWORD'
  Logger(newPerson)

  PersonExtended.Log()


  const _Result = LoginFunction('Ali', '123456')
  console.info('RESULT ==> ', _Result)

  ReturnProductStatus('PENDING')


  Logger(_ApiResponse)


  Logger(newCar2)

  //* RETURN
  return (
    <div>
      <h1 className='text-4xl font-bold bg-blue-700 py-5 text-center w-fit px-4 rounded-lg mx-auto my-5 border-b-4 border-white'>TypeScript Training</h1>
      <a href="/about" id='LINK'></a>
    </div>
  )
}

export default TsTrainingPage 