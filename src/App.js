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
    instructions: "Loading…"
  },
  // {
  //   id:2,
  //   name: "Plain Pork",
  //   servings: 6,
  //   cookTime: "0:45",
  //   instructions: "1. Put paprika on pork\n2. Put pork in oven.\n3. Eat pork."
  // },
  // {
  //   id:3,
  //   name: "Spicy Pork",
  //   servings: 2,
  //   cookTime: "3:00",
  //   instructions: "1. Slice jalepenos.\n2. Cry in pain.\n3. Eat pork."
  // } 
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
