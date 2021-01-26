import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';
import RecipeList from './RecipeList';
import '../css/app.css';

// Netlify.com
// https://app.netlify.com/sites/pensive-benz-e9c005/overview

// Github
// https://github.com/realityexpander/reactcourse

// uuid
// https://www.npmjs.com/package/uuid


let tempRecipesForLoadingIndicator = [
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
  const [recipes, setRecipes] = useState(tempRecipesForLoadingIndicator)

  const loadRecipes = async () => {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/realityexpander/reactcourse/master/src/sample.json")
    const data = await res.json()
    setRecipes(data)
  }

  useEffect( () => {
    loadRecipes()
    return () => {}
  }, [])

  return (
    <RecipeList 
      recipes={ recipes }
      handleRecipeAdd={handleRecipeAdd}  
    />
  )

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(), 
      name: "new","servings": 1,
      "cookTime": "1:00",
      "instructions": "Instr.",
      "ingredients": [
        {
          "id":uuid(),
          "name": "Pork",
          "amount": "1 Tbs"
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
}


export default App;
