import React, { useReducer } from 'react'
import './App.css';

const reducer = (state: {count: number}, action: {type: 'INCREMENT' | 'DECREMENT' | 'CUSTOM', payload?: number}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'CUSTOM':
      return {count: state.count + (action?.payload || 0)};
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

  const custom = () => {
    dispatch({type: 'CUSTOM', payload: 5});
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={custom}>custom</button>
    </>
  );
}

export default App;
