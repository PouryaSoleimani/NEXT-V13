import React, { useReducer } from 'react'

type CounterType = { count: number }
type ActionType = { type: 'increment' | 'decrement' | 'reset', payload: number }

const initialState = { count: 0 }

function reducerFunc(state: CounterType, action: ActionType) {
  switch (action.type) {
    case "increment": return { count: state.count + action.payload }
    case "decrement": return { count: state.count - action.payload }
    case "reset": return initialState
    default: { throw new Error('Invalid Action') }
  }
}


const ReducerComponent = () => {

  const [state, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <div className='bg-zinc-600 text-black font-black p-4 w-fit mx-auto my-5 rounded-xl text-2xl'>
      <h2>count : {state.count}</h2>
      <div className='flex gap-6 my-5'>
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })} className='bg-emerald-700 p-2 rounded-lg'>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 1 })} className='bg-red-700 p-2 rounded-lg'>decrement</button>
        <button onClick={() => dispatch({ type: 'reset', payload: 0 })} className='bg-blue-700 p-2 rounded-lg'>reset</button>
      </div>
    </div>
  )
}

export default ReducerComponent