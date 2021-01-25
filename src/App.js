import React, { useEffect, useState } from 'react'
import RecipeList from './RecipeList';

// Netlify.com
// https://app.netlify.com/sites/pensive-benz-e9c005/overview

// Github
// https://github.com/realityexpander/reactcourse


let tempLoading = [
  {
    id:1,
    name: "Loading…",
    servings: "loading…",
    cookTime: "loading…",
    instructions: "Loading…", 
    ingredients: [
      {
        id:1,
        name: 'loading...',
        amount: ''
      }
    ]
  }
]

function App() {
  const [data, setData] = useState({})
  const loadData = async () => {
    const res = await fetch("http://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/realityexpander/reactcourse/master/src/sample.json")
    const data = await res.json()
    setData(data)
  }

  useEffect( () => {
    loadData()
    return () => {}
  }, [])

  if(JSON.stringify(data)==JSON.stringify({})) setData( tempLoading ) // must be a better way to do this
  return (
    <RecipeList recipes={ data }/>
  )
}

export default App;
