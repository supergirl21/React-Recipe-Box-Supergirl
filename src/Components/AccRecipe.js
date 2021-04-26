import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import {Typography, Button} from '@material-ui/core';
import {TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

const AccRecipe = ({recipe, onDelete, onEdit}) => {
    
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false); //to expand the accordion
    const [title, setTitle] = useState([]);
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState('');
    const [editRecipe, setEditedRecipe] = useState(''); //to handle edited recipes


  const handleChangeAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleOpen = (recipe) => {
    console.log("open ACC modal", recipe);  
    setRecipes(recipe) //to pass in props to edit modal
    setOpen(true); 
};
const handleClose = (e) => {
  setOpen(false);
};
//To Edit the recipe
// const handleUpdate = (id, newTitle, newIngredients) => {
//   const editRecipesArray = [recipes];  //error: [...recipes] recipes is not iterable. 
//   console.log("handleUpdate", editRecipesArray);           //this recipes sees it as an empty object
//   for (let recipe in editRecipesArray) {
//     if (recipes.id === id) {
//       recipes.title = newTitle;
//       recipes.ingredients = !recipes.Ingredients;
//     }
//   }
//   // editRecipesArray[id] = recipe;
//   setEditedRecipe(editRecipesArray);

//   // console.log("edit recipe", setEditedRecipe);
// };

const onSubmit = (id) => {
  console.log('submit edit button', id);
  // e.preventDefault();
// handleUpdate({title, ingredients})
onEdit({title, ingredients}) //updating only the ingredients in the UI
setEditedRecipe(editRecipe)
setTitle({title}) //does not update the title in the UI
setIngredients({ingredients})
setOpen(false);
}

    return (
        <div className='homecontainer' onSubmit={onSubmit}>
            <Accordion style={{
                marginBottom: "20px",
                borderRadius: 5,
                }} >
                <AccordionSummary >
                    <Typography>{recipe.title}</Typography>
                </AccordionSummary>
                <AccordionDetails square expanded={expanded === 'panel'} 
                    onChange={handleChangeAccordion('panel')}
                    aria-controls="panel1d-content" id="panel1d-header">

{/* //iterating as only one list or string */}

                        {/* <Typography>{recipe.ingredients}  */}
                            <Typography>
                            <ul>
                                <li key={recipe.id}>{recipe.ingredients}</li> 
                            </ul>
                            </Typography>       
                    {/* </Typography> */}

 {/* //iterating properly but not working in Add Function */}   

                    {/* <Typography>{recipe.ingredients.map((ingredients) => {
                        return (
                            <Typography>
                            <ul>
                                <li key={recipe.id}>{ingredients}</li>
                            </ul>
                            </Typography>
                            )
                        })} 
                    </Typography> */}
                     
                </AccordionDetails> 

{/* Edit Button Modal Form */}
                <Button style={{
                backgroundColor: "#5aadde",
                marginRight: "16px",
                }}variant="contained" color="primary" 
                onClick={()=> handleOpen(recipe)}
                // handleEditRecipe();
                >
                Edit
                </Button>
                <Button  type= "submit"  variant="contained" color="secondary" 
                onClick={() => onDelete(recipe.id)}
                >
                Delete
                </Button>
            </Accordion>

{/* Opens Modal form */}
<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div>
                     <div className="modal-header">         
                            <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                            </Button>
                    </div> 
                    <form  onSubmit ={onSubmit} className="modal-body">
                        <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
                        <DialogContent >
                            <Typography >Recipe Title</Typography>
                            <TextField 
                                className="form-control" 
                                type="text"
                                margin="dense" 
                                id="outlined-basic" 
                                label="Type Recipe Title" 
                                value ={recipes.title} //pass in the default value of the title
                                onChange={(e) => setRecipes(e.target.value)} //does not show the updated title in UI
                                variant="outlined" 
                                fullWidth= 'true'/>
                        </DialogContent>
                        <DialogContent >
                            <Typography >Ingredients</Typography>
                            <TextField 
                                className="form-control" 
                                type="text"
                                margin="dense" 
                                id="outlined-basic" 
                                label="Edit Ingredients separated by a comma" 
                                value={recipes.ingredients}//pass in the default value of the ingredients
                                onChange={(e) => setIngredients(e.target.value)}//does show the updated ingredients in UI
                                variant="outlined" 
                                fullWidth= 'true'/>
                        </DialogContent>
                    </form>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
 {/* //Submit Modal button                        */}
                        <Button type="submit" variant="contained" color="primary" 
                            onClick={onSubmit}
                                 >Submit
                        </Button>
                    </DialogActions>
                </div> 
            </Dialog>
          </div>
      )
}

export default AccRecipe;
 