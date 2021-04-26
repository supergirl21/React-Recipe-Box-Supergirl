// import React, { useState } from 'react';
// import {Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';


// const EditRecipe = ({onEdit}) => {
//     const [open, setOpen] = useState(false);
//     const [title, setTitle] = useState([]);
//     const [ingredients, setIngredients] = useState([]);

   

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
        
//             {/* <Button style={{
//                 backgroundColor: "#5aadde",
//                 marginRight: "16px",
//                 }}variant="contained" color="primary" 
//                 onClick={handleOpen}
//                 >
//                 Edit Recipe Button 
//                 </Button> */}
//                 {/* <Button  type= "submit"  variant="contained" color="secondary" 
//                 onClick={() => onDelete(recipe.id)}
//                 >
//                 Delete
//                 </Button> */}
//             {/* <Button style={{
//                 marginTop: "20px",
//                 marginLeft: "150px",
//                 marginRight: "150px"
//                 }} variant="contained" color="primary"
//                 onClick = {handleOpen}
//             >Edit 2</Button> */}
// {/* //modal */}
//             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//                 <div>
//                      <div className="modal-header">         
//                             <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
//                                     <span aria-hidden="true">&times;</span>
//                             </Button>
//                     </div> 
//                     <form  onSubmit ={onSubmit} className="modal-body">
//                         <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
//                         <DialogContent >
//                             <Typography >Recipe Title</Typography>
//                             <TextField 
//                                 className="form-control" 
//                                 type="text"
//                                 margin="dense" 
//                                 id="outlined-basic" 
//                                 label="Type Recipe Title" 
//                                 value ={title}
//                                 onChange={(e) => setTitle(e.target.value)}
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
//                                 label="Type Recipe Title" 
//                                 value={ingredients}
//                                 onChange={(e) => setIngredients(e.target.value)}
//                                 variant="outlined" 
//                                 fullWidth= 'true'/>
//                         </DialogContent>
//                     </form>
//                     <DialogActions>
//                         <Button variant="outlined" onClick={handleClose}>Close</Button>
                        
//                         <Button type="submit" variant="contained" color="primary" 
//                             // onClick={() =>{
//                             //     handleClose();
//                             //     onSubmit();}
//                             //      } 
//                             onClick={onSubmit}
//                             // onClick={()=>{
//                             //     // onEdit();
//                             //     onSubmit();
//                             //     handleClose(); }
//                             // onClick={handleClose} }
//                             >Submit
//                         </Button>
//                     </DialogActions>
                    
//                 </div> 
//             </Dialog>

//         </div>
//     )
// }

// export default EditRecipe;