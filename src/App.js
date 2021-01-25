import React from 'react'
import RecipeList from './RecipeList';

// Netlify.com
// https://app.netlify.com/sites/pensive-benz-e9c005/overview

// Github
// https://github.com/realityexpander/reactcourse


function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id:1,
    name: "Chicken Soup",
    servings: 3,
    cookTime: "1:45",
    instructions: "1. Do first\n2. Do next\n3. Do third"
  },
  {
    id:2,
    name: "Plain Pork",
    servings: 6,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven.\n3. Eat pork."
  },
  {
    id:3,
    name: "Spicy Pork",
    servings: 2,
    cookTime: "3:00",
    instructions: "1. Slice jalepenos.\n2. Cry in pain.\n3. Eat pork."
  },
]

export default App;
