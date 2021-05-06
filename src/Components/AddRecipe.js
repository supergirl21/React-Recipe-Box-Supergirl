import React, { useState } from 'react';
import {Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';


const AddRecipe = ({onAdd}) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    
    
    const onSubmit = (e) => {
      e.preventDefault();
      if(!title) {
          alert('Please add a recipe')
          return
      }
      onAdd({title, ingredients})
      setTitle('')
    //   setIngredients(ingredients.split(',')) //not working 
      setIngredients('')
      setOpen(false)
    }

   

    const handleOpen = (e) => {
        setOpen(true);
    };
    const handleClose = (e) => {

        setOpen(false);
    };

    return (
        <div className = "add-btn"  onSubmit ={onSubmit}>
            <Button className = "add-btn" style={{
                marginTop: "20px"
                }} variant="contained" color="primary"
                onClick = {handleOpen}
            >Add Recipe</Button>

{/* //Add Recipe modal */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div>
                     <div className="modal-header">         
                            <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                            </Button>
                    </div> 
                    <form  onSubmit ={onSubmit} className="modal-body">
                        <DialogTitle id="form-dialog-title">Add Recipe Component</DialogTitle>
                        <DialogContent >
                            <Typography >Recipe Title</Typography>
                            <TextField 
                                className="form-control" 
                                type="text"
                                margin="dense" 
                                id="outlined-basic" 
                                label="Type Recipe Title" 
                                value ={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                label="Type Ingredients separated by a comma" 
                                value={ingredients.split(",")}
                                onChange={(e) => setIngredients(e.target.value)}
                                variant="outlined" 
                                fullWidth= 'true'/>
                        </DialogContent>
                    </form>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                        
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

export default AddRecipe;
