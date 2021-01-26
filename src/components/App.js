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

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(tempRecipesForLoadingIndicator)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  const loadRecipes = async () => {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/realityexpander/reactcourse/master/src/sample.json")
    const data = await res.json()
    setRecipes(data)
  }

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

  function handleRecipeDelete(id) {
    const newRecipes = recipes.filter( (recipe) => recipe.id != id )
    
    setRecipes(newRecipes)

  }

  useEffect( () => {
    loadRecipes()
    return () => {}
  }, [])

  return (
    <RecipeContext.Provider data={ recipeContextValue }>
      <RecipeList recipes={ recipes } />
    </RecipeContext.Provider>
  )
}


export default App;
