import React from 'react';
import EditRecipe from './EditRecipe';



const AccordionRecipes = ({recipes, onDelete, handleUpdate}) => {
 
    return (
        <div className='homecontainer' >
          {recipes.map(recipe => {
              return (
              <EditRecipe key={recipe.id} recipe={recipe} onDelete={onDelete} handleUpdate={handleUpdate}/>
              )
              })}  
        </div>
      )
}

export default AccordionRecipes;