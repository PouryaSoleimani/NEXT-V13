import React, { useReducer } from 'react'

type CounterType = { count: number }
type ActionType = { type: "INCREMENT" | "DECREMENT" | "RESET", payload: number }

// 2
const initialState = { count: 0 }
// 3
const ReducerFunc = (state: CounterType, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + action.payload }
    case 'DECREMENT': return { count: state.count - action.payload }
    case 'RESET': return initialState
    default: return state
  }
}


// ^ COMPONENT
const Reducer = () => {

  // 1
  const [state, dispatch] = useReducer(ReducerFunc, initialState)

  return (
    <div>
      <h2>COUNT : {state.count} </h2>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>RESET</button>
    </div>
  )
}

export default Reducer