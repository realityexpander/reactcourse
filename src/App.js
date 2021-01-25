import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

// Netlify
//

export const ThemeContext = React.createContext() // like global variable

function App() {
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter
      <Counter initialCount={4} />

      CounterHooks
      <CounterHooks initialCount={500} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'green' ? 'blue' : 'green'
      })}>Change Theme </button>
    </ThemeContext.Provider>
  )
}

export default App;
