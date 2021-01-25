import React from 'react'

export default function CounterHooks(props) {
  return (
    <div>
    <button>-</button>
    <span>{props.initialCount}</span>
    <button >+</button>
  </div>
  )
}