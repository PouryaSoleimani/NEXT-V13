import React from 'react'

// const TypeScriptPage = (): JSX.Element => { // TYPE OF COMPONENT
// const TypeScriptPage = (): React.ReactNode => { // TYPE OF COMPONENT
const TypeScriptPage: React.FC = (): JSX.Element => { // TYPE OF COMPONENT
  console.info(TypeScriptPage.name)
  return (
    <div className='text-3xl font-bold p-6 text-center bg-blue-700 text-white my-6'>TypeScriptPage</div>
  )
}
export default TypeScriptPage