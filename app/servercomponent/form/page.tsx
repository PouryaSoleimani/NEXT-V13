//* FORM PAGE IN SERVER COMPONENT
import React from 'react'
type FormProps = { id: number, name: string, username: string }

const Form = (response: FormProps) => {

  return (
    <div className='text-xl p-2 font-semibold '>
      <h1>{response.id} - {response.name} - {response.username}</h1>
    </div>
  )

}

export default Form