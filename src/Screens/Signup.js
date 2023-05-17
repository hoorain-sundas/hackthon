import React from 'react';
import { Box, Typography } from "@mui/material";
import BAInput from '../Components/BAInput';
import BAButton from '../Components/BAButton';
import { useState } from 'react';
import { signUpUser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';
import SelectInput from '../Components/SelectInput';
import BasicSelect from '../Components/SelectInput';

function SignUp () {
  const navigate = useNavigate();
  const [model, setModel] = useState({});
   let signUp = (event) => {
    event.preventDefault();
    console.log(model);
    signUpUser(model)
    .then(() => {
      console.log(model);
      navigate('../login')
    })
    .catch((err) => {
      console.log(err);
    })
   }

   const type = [
      "User",
      "Transpoter"
   ]
   
  return (
    <>
    
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-secondary">
       <Box className="shadow rounded me-5 ms-5 bg-white p-5">
       <Typography variant="h3" className='text-center'>Sign Up</Typography>
       <form>
       <Box className="p-2 mt-3 fs-1 text-center">
       <BAInput 
       label="First Name" value={model.userName} onchange={(e) => setModel({...model, userName: e.target.value})} />
       </Box>
       <Box className="p-2 fs-1">
       <BAInput  
       label="Last Name" value={model.lastName} onchange={(e) => setModel({...model, lastName: e.target.value})} />
       </Box>
       <Box className="p-2">
       <BAInput   
       label="Email" type="email" value={model.email} onchange={(e) => setModel({...model, email: e.target.value})} />
       </Box >
       <Box className="p-2">
       <BAInput     
       label="Password" type="password" value={model.password} onchange={(e) => setModel({...model, password: e.target.value})} />
       </Box>
       <Box className="p-2">
       <BasicSelect label="User Type" obj={type} onchange={(e) => setModel({...model, type: e.target.value})} />
       </Box>
       <Box className="p-3 text-center">
       <BAButton label="Sign Up" onclick={signUp} />
       </Box>
       </form>
       </Box>
      </Box>
   
    </>
  )
}

export default SignUp;
