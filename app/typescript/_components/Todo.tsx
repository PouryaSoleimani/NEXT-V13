"use client"
import React, { useEffect, useRef, useState } from 'react'

type SingleTodoType = { id: number, title: string, isCompleted: boolean }
type TodoComponentPropsType = { props: SingleTodoType[] }



// COMPONENT
const TodoComponent: React.FC<React.PropsWithChildren<TodoComponentPropsType>> = (props, children) => {

  const [first, setFirst] = useState<boolean>(false) // USESTATE TYPE


  const ELEM = useRef<HTMLInputElement>(null) // USEREF TYPE
  useEffect(() => {
    if (ELEM.current) { ELEM.current.focus() }
  }, [])


  // FUNCTIONS
  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    console.info('Clicked')
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.info('Changed')
  }

  // ^ RETURN _________________________________________________________________________________________________________________________________________________
  return (
    <div className='grid grid-cols-5 p-5 gap-4'>
      {props.props.map(todo => (
        <div key={todo.id} className='flex justify-between items-center border-2 border-zinc-600 gap-5 bg-zinc-900 p-4 rounded-xl text-2xl my-3 font-black'>
          <h3>{todo.title}</h3>
          <p className={`${todo.isCompleted ? 'bg-green-500' : 'bg-red-500'} py-1 px-2 text-black rounded-md`}>{todo.isCompleted ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
      <input type="text" name="" id="" ref={ELEM} />
    </div>
  )
}

export default TodoComponent


// REACT.CSS PROPERTIES
const styles: React.CSSProperties = {
  color: 'red',
  backgroundColor: 'black',
  border: '1px solid white',
} 