import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';

// Netlify.com build/host
// https://app.netlify.com/sites/pensive-benz-e9c005/overview

// Github repo
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
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(tempRecipesForLoadingIndicator)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  // methods used in child components
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(recipe => recipe.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(), 
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id:uuid(),
          name: "",
          amount: ""
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  
  function handleRecipeDelete(id) {
    const newRecipes = recipes.filter( (recipe) => recipe.id !== id )
    setRecipes(newRecipes)
  }

  // load recipes from API
  const loadRecipes = async () => {
    const res = await fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/realityexpander/reactcourse/master/src/sample.json")
    const data = await res.json()
    setRecipes(data)
  }
  
  // initial load from server if localstorage is empty 
  // ORDER OF USEEFFECT IS IMPORTANT
  useEffect( () => {
    const recipes = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipes===null || JSON.parse(recipes).length===0) {
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
      {selectedRecipe && <RecipeEdit recipe={ selectedRecipe } /> }
    </RecipeContext.Provider>
  )
}


export default App;
