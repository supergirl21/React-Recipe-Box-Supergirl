// import React, { useState } from 'react';
// import {Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
// import AccRecipe from './AccRecipe';


// const EditRecipe = ({recipe, onEdit}) => {
//     const [open, setOpen] = useState(false);
//     const [expanded, setExpanded] = useState(false); //to expand the accordion
//     const [title, setTitle] = useState("");  // shows an empty title on the console
//     const [ingredients, setIngredients] = useState("");// shows the edited ingredients on the console
//     const [recipes, setRecipes] = useState("");
//     const [editedRecipe, setEditedRecipe] = useState({})
//     const [editRecipeText, setEditRecipeText] = useState(""); //to handle edited recipes

//     const handleOpen = (recipe) => {
//         console.log("open ACC modal", recipe);  
//         setRecipes(recipe) //to pass in props to edit modal
//         setOpen(true); 
//     };
  //To Edit the recipe
//   const handleUpdate = (id, newTitle, newIngredients) => {
//     const editRecipesArray = [recipes];  //error: [...recipes] recipes is not iterable. 
//     console.log("handleUpdate", editRecipesArray);           //this recipes sees it as an empty object
//     for (let recipe in editRecipesArray) {
//       if (recipes.id === id) {
//         recipes.title = newTitle;
//         recipes.ingredients = !recipes.ingredients;
//       }
//     }
//     // editRecipesArray[id] = recipe;
//     setEditedRecipe(editRecipesArray);
  
//     // console.log("edit recipe", setEditedRecipe);
//   };

//     const onSubmit = (e) => {
//         // console.log(e);
//     //   e.preventDefault();
//       if(!title) {
//           alert('Please edit a recipe')
//           return
//       }
//       onEdit({title,ingredients})
//       setTitle(title )
//       setIngredients(ingredients)
//     }
//     // const handleOpen = (e) => {
//     //     console.log("open Edit modal");
//     //     setOpen(true);
//     // };
//     const handleClose = (e) => {
//         setOpen(false);
//     };

//     return (
        
//         <div onSubmit ={onSubmit}>
//         <AccRecipe />
//             {/* <Button style={{
//                 backgroundColor: "#5aadde",
//                 marginRight: "16px",
//                 }}variant="contained" color="primary" 
//                 onClick={handleOpen}
//                 >
//                 Edit Recipe Button 
//                 </Button> 
//                 <Button  type= "submit"  variant="contained" color="secondary" 
//                 onClick={() => onDelete(recipe.id)}
//                 >
//                 Delete
//                 </Button>  */}
//             {/* <Button style={{
//                 marginTop: "20px",
//                 marginLeft: "150px",
//                 marginRight: "150px"
//                 }} variant="contained" color="primary"
//                 onClick = {handleOpen}
//             >Edit 2</Button>
// {/* Opens Modal form */}
// <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                 <div>
//                      <div className="modal-header">         
//                             <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
//                                     <span aria-hidden="true">&times;</span>
//                             </Button>
//                     </div> 
//                     <form  onSubmit ={onSubmit} className="modal-body">
//     {/* trial edit ternary statement */}
//     {/* {editedRecipe === recipe.id ? ({}):(<div>{recipe.title}</div>)} */}
    
//                         <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
//                         <DialogContent >
//                             <Typography >Recipe Title</Typography>
//                             <TextField 
//                                 className="form-control" 
//                                 type="text"
//                                 margin="dense" 
//                                 id="outlined-basic" 
//                                 // label="Type Recipe Title" 
//                                 onChange={(e) => setRecipes(e.target.value)} 
//                                 //does not show the updated title in UI
//                                 // onChange= {handleUpdate}
//                                 value ={title} //pass in the default value of the title
//                                 variant="outlined" 
//                                 fullWidth= 'true'/>
//                         </DialogContent>
//                         <DialogContent >
//                             <Typography >Ingredients</Typography>
//                             <TextField 
//                                 className="form-control" 
//                                 type="text"
//                                 margin="dense" 
//                                 id="outlined-basic" 
//                                 label="Edit Ingredients separated by a comma" 
//                                 value={recipes.ingredients}//pass in the default value of the ingredients
//                                 onChange={(e) => setIngredients(e.target.value)}//does show the updated ingredients in UI
//                                 // onChange= {handleUpdate}
//                                 variant="outlined" 
//                                 fullWidth= 'true'/>
//                         </DialogContent>
//                     </form>
//                     <DialogActions>
//                         <Button variant="outlined" onClick={handleClose}>Close</Button>
//  {/* //Submit Modal button                        */}
//                         <Button type="submit" variant="contained" color="primary" 
//                             onClick={onSubmit}
//                                  >Submit
//                         </Button>
//                     </DialogActions>
//                 </div> 
//             </Dialog>
//         </div>
//     )
// }

// export default EditRecipe;