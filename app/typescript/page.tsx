import React from 'react'
import TodoComponent from './_components/Todo'

// const TypeScriptPage = (): JSX.Element => { // TYPE OF COMPONENT
// const TypeScriptPage = (): React.ReactNode => { // TYPE OF COMPONENT
const TypeScriptPage: React.FC = (): JSX.Element => { // TYPE OF COMPONENT
  TypeScriptPage.displayName = "TS"
  // console.info(TypeScriptPage.displayName)
  return (
    <>
      <div className='text-3xl font-bold p-6 text-center bg-blue-700 text-white my-6'>TypeScriptPage</div>
      <TodoComponent props={TodosList} />
    </>
  )
}
export default TypeScriptPage


const TodosList = [
  { id: 1, title: 'Todo 1', isCompleted: true },
  { id: 2, title: 'Todo 2', isCompleted: false },
  { id: 3, title: 'Todo 3', isCompleted: true },
  { id: 4, title: 'Todo 4', isCompleted: false }
]