import React, { useState, useRef, useEffect } from 'react';
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

const EditRecipe = ({recipes, onDelete, recipe}) => {
    
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false); //to expand the accordion
  const [title, setTitle] = useState("");  // shows an empty title on the console
  const [ingredients, setIngredients] = useState("");// shows the edited ingredients on the console
  const [editedRecipe, setEditedRecipe] = useState({})
   
  const handleChangeAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleOpen = () => {
    setOpen(true); 
  };
  const handleClose = () => {
    setOpen(false);
  };
//To Edit the recipe
  // const handleChange = (e) => {
  //   console.log("open to edit recipe", e);  
  //   setEditedRecipe(e.target.value);
  // }


  const onSubmit = (e) => {
    // console.log('submit edit button', e);
    e.preventDefault();
  const editRecipe = {
    id: recipe.id, 
    title: recipe.title, 
    ingredients: recipe.ingredients
  }
  // // id should be the id of the recipe Object, value of title, title store in state & ingredients
  setEditedRecipe(title)  
  setOpen(false);
  }



    return (
        <div className='homecontainer' onSubmit={onSubmit}>
          {/* {recipes.map (recipe => { */}
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
                <Typography>
                  <Typography>
                    <ul>
                        {/* {recipe.ingredients.map(ingredient => ( */}
                          <li key={recipe.id}>
                            {recipe.ingredients} 
                          </li>
                        {/* ))}  */}
                      </ul>
                    </Typography>                           
                </Typography>
 {/* iterating but not  */}
                        {/* <Typography>
                            <Typography>
                            <ul>{recipe.ingredients} 
                                <li key={recipe.id}>{ingredients} </li> 
                            </ul>
                            </Typography>        
                        </Typography> */}

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
                    <form  className="modal-body">   
                        <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
                        <DialogContent >
                            <Typography >Recipe Title</Typography>
                            <TextField 
                                className="form-control" 
                                type="text"
                                margin="dense" 
                                id="outlined-basic" 
                                label="Type Recipe Title" 
                                onChange={(e) => setTitle(e.target.value)} 
                                //does not show the updated title in UI
                                // onChange= {handleChange}
                                value ={title} //pass in the default value of the title
                                variant="outlined" 
                                fullWidth= 'true'
                                
                              />
                        </DialogContent>
                        <DialogContent >
                            <Typography >Ingredients</Typography>
                            <TextField 
                                className="form-control" 
                                type="text"
                                margin="dense" 
                                id="outlined-basic" 
                                label="Edit Ingredients separated by a comma" 
                                value={ingredients.split(",")}//pass in the default value of the ingredients
                                onChange={(e) => setIngredients(e.target.value)}//does show the updated ingredients in console
                                // onChange= {handleChange}
                                variant="outlined" 
                                fullWidth= 'true'
                                
                              />
                        </DialogContent>
                    </form>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
 {/* //Submit Modal button                        */}
                        <Button type="submit" variant="contained" color="primary" 
                            onClick={(e)=> onSubmit(e, editedRecipe)}
                            // onClick={(e)=> onSubmit}
                                 >Submit
                        </Button>
                    </DialogActions>
                </div> 
            </Dialog>
            {/* })}  //end of boiler plate  */}
          </div>
      )
}

export default EditRecipe;
 
//    To Edit the recipe
// const handleUpdate = (id, newTitle, newIngredients) => {
//   const editRecipesArray = [recipes];  //error: [...recipes] recipes is not iterable. 
//   console.log("handleUpdate", editRecipesArray);           //this recipes sees it as an empty object
//   for (let recipe in editRecipesArray) {
//     if (recipes.id === id) {
//       recipes.title = !recipes.title;
//       recipes.ingredients = !recipes.ingredients;
//     }
//   }
//   // editRecipesArray[id] = recipe;
//   setEditedRecipe(editRecipesArray);

//   // console.log("edit recipe", setEditedRecipe);
// };
