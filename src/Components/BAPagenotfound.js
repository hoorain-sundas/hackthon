import React from 'react';
import { Typography } from "@mui/material";



function BAPagenotfound() {
  return (
    <div className='text-center'>
       <Typography variant='h1' style={{fontSize: "200px",fontWeight: "bolder", color: "blue",fontFamily: "Verdana", marginTop: "100px"}}>Oops!</Typography>
       <Typography variant='h6' className='fw-bold'>404 - PAE NOT FOUND</Typography>
       <Typography variant='p'>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</Typography>
    </div>
  )
}

export default BAPagenotfound;
