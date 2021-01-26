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
// tempRecipesForLoadingIndicator = []

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

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

  // initial load from server if localstorage is empty 
  // ORDER IS IMPORTANT
  useEffect( () => {
    const recipes = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipes==null || JSON.parse(recipes).length==0) {
      loadRecipes()
    } else {
      setRecipes( JSON.parse(recipes) )
    }
    return () => {}
  }, [])

  // update local storage
  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  return (
    <RecipeContext.Provider value={ recipeContextValue }>
      <RecipeList recipes={ recipes } />
    </RecipeContext.Provider>
  )
}


export default App;
