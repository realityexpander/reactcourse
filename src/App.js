import React from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
  return (
    <>
      Counter
      <Counter initialCount={4} />

      CounterHooks
      <CounterHooks initialCount={500} />
    </>
  )
}

export default App;
