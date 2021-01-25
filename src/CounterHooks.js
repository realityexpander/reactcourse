import React, { useState } from 'react'

export default function CounterHooks({initialCount}) {
  const [count, setCount] = useState(initialCount) // must always be first statement at top of fn
  return (
    <div>
    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <span>{count}</span>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  </div>
  )
}