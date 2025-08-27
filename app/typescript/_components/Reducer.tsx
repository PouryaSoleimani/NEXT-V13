import React, { useReducer } from "react";
// TYPES
type StateType = { count: number };
type ActionType = { type: "increment" | "decrement" | "reset"; payload: 0 | 1 };
// STATE & ACTION
const initialState = { count: 0 };
const reducerfunction = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("invalid action ...");
  }
};
// COMPONENT
const Reducer = () => {
  // REDUCER
  const [state, dispatch] = useReducer(reducerfunction, initialState);
  return (
    <div className="w-fit bg-zinc-900 my-4 p-5 text-2xl font-bold mx-auto rounded-xl">
      <h2 className="my-5 text-center text-4xl">count : {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        className="px-4 py-2 bg-emerald-900 text-white mx-4 rounded-lg"
      >
        increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
        className="px-4 py-2 bg-red-900 text-white mx-4 rounded-lg"
      >
        decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset", payload: 0 })}
        className="px-4 py-2 bg-blue-900 text-white mx-4 rounded-lg"
      >
        reset
      </button>
    </div>
  );
};

export default Reducer;
