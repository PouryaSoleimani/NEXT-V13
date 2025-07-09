import React, { useReducer } from 'react'
// TYPES
type StateType = { count: number }
type ActionType = { type: 'increment' | 'decrement' | 'reset', payload: number }



// STATE & ACTION
const initialState = { count: 0 }
const reducerFunction = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'increment': return { count: state.count + action.payload }
    case 'decrement': return { count: state.count - action.payload }
    case 'reset': return { count: 0 }
    default: throw new Error('invalid action')
  }
}

//COMPONENET
const ReducerComponent = () => {
  // USE REDUCER
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  return (
    <div className='bg-zinc-700 w-fit text-2xl p-5 mx-auto rounded-xl font-bold my-4'>
      <h2>count : {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })} className='bg-green-900 text-white px-3 py-2 mx-2 rounded-lg border-2 border-black my-3'>increment</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })} className='bg-red-900 text-white px-3 py-2 mx-2 rounded-lg border-2 border-black my-3'>decrement</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })} className='bg-blue-900 text-white px-3 py-2 mx-2 rounded-lg border-2 border-black my-3'>reset</button>
    </div>
  )
}

export default ReducerComponent