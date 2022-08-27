import React, { useReducer } from 'react'
import './App.css';

const reducer = (state: {count: number}, action: {type: 'INCREMENT' | 'DECREMENT'}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      throw new Error('Unexpected action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
