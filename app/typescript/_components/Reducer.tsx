import React, { useReducer } from 'react'

type CounterType = { count: number }

const initialState = { count: 0 }
const firstReducer = (state: CounterType, action: { type: string, payload: number }) => {
  switch (action.type) {
    case 'increment': return { count: state.count + action.payload }
    case 'decrement': return { count: state.count - action.payload }
    case 'reset': return initialState
    default: return state
  }
}
// ^ COMPONENT
const Reducer = () => {

  const [state, dispatch] = useReducer(firstReducer, initialState)

  return (
    <div>
      <h2>COUNT : {state.count} </h2>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>RESET</button>
    </div>
  )
}

export default Reducer