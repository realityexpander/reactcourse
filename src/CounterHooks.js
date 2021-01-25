import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({initialCount}) {
  const [count, setCount] = useState(initialCount) // must always be first statement at top of fn
  const style = useContext(ThemeContext)
  return (
    <div>
    <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    <span>{count}</span>
    <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  </div>
  )
}