import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext() // like global variable

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter
      <Counter initialCount={4} />

      CounterHooks
      <CounterHooks initialCount={500} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'white' : 'red'
      })}>Change Theme </button>
    </ThemeContext.Provider>
  )
}

export default App;
