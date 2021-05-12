import React from 'react'
// import { useCountRenders } from './useCountRenders'

// memo when props change, rerender
export const Hello = React.memo(({ increment }) => {
  // useCountRenders();
  // return <button onClick={increment}>hello</button>
  return <button onClick={() => increment(5)}>hello</button>
})
