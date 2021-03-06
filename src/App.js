import React, { useState } from 'react';
import './App.css';
import AccordionRecipes from './Components/AccordionRecipes';
import AddRecipe from './Components/AddRecipe';
// import Data from './Components/data.json';
import './Components/firebaseConfig';


function App() {
  const [recipes, setRecipes] = useState(
    [
      {
        id: 1,
        title: "Welsh Rarebit", 
        ingredients: ["bread","cheese","flour","worcestershire sauce","mustard"]
        },{
        id: 2,
        title: "Bara Brith", 
        ingredients: ["flour","eggs","brown sugar","mixed fruit","cinnamon"]
        
      }, {
        id: 3,
        title: "Scones", 
        ingredients: ["flour","eggs","caster sugar","milk","sulatanas","baking powder"]
      }
    ]
  )
    //Add Recipe
    const addRecipe = (recipe) => {
      
      const id = new Date().getTime() //to get a new id every time the input was made
      const newRecipe = {id, ...recipe}
      setRecipes([...recipes, newRecipe])
    }

   
    //To Edit the recipe
  const handleUpdate = (title, ingredients) => {
    const updatedRecipe = {
      title: title,
      ingredients: ingredients.split(",")
    } 
    const updatedRecipes = [...recipes, updatedRecipe]
  // editRecipesArray[id] = recipe;
    setRecipes(updatedRecipes);

  console.log("edit recipe", setRecipes);
  };
    
   

    //Delete Recipe
    const deleteRecipe = (id) => {
      setRecipes(recipes.filter((recipe) => recipe.id !== id))
    }


  return (
    <div className="App">
        <h1 className="title-recipe">
        Supergirl's Recipe Box is here!
        </h1>
        <AccordionRecipes recipes={recipes} onDelete={deleteRecipe} handleUpdate={handleUpdate}/> 
        <AddRecipe recipes={recipes} onAdd={addRecipe} />
    </div>
  );
}

export default App;
