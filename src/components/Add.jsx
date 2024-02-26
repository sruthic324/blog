import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const Add = () => {
  return (
    <div><br /><br /><br /> <br />
      <Typography variant="h6">CREATE A BLOG</Typography> <br />
        
        <TextField variant="outlined"  label="Blog Name" >Blog Name</TextField>
        <br/><br/>
        
        <TextField variant="outlined"  label=" Description" > Description</TextField> 
        <br/><br/>

        <TextField variant="outlined"  label="Author Name" >Author Name</TextField>
         <br/><br/>
        <Button variant="contained" color="success">Submit</Button>
        
    </div>
  );
};

export default Add;