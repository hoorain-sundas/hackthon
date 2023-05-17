import React from 'react'
// import { TextField, Button } from "@mui/material";cfdf
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import BAInput from '../Components/BAInput';
import { loginUser } from '../config/firebase/firebasemethods';
import { useState } from "react";
import BAButton from '../Components/BAButton';


function Login() {
    const navigate = useNavigate();
     const [model, setModel] = useState({});
    const userType = [
        {
            userType: 'User',
            route: '/',
        },
        {
            userType: 'Transpoter',
            route: '/Admin',
        },
        
    ]
     let signIn = () => {
        console.log(model,"=====");
        loginUser("users",model)
          .then((res) => {
            console.log(res,"Success");
            userType.map((x,i) => {
                console.log(res.type, x.userType)
                if (res.type == x.userType)
                navigate(x.route, { state: res })
            })
          })
          .catch((err) => {
            loginUser("admin",model)
            .then((res) => {
              console.log("Success1");
              userType.map((x,i) => {
                  console.log(res.type, x.userType)
                  if (res.type == x.userType)
                  navigate(x.route, { state: res })
              })
            })
            console.log(err);
          });
      };
    
    return(
        <>
        <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-secondary">
       <Box className="shadow rounded p-5 bg-white">
       <Typography className="mb-4 ms-2" variant="h3">Login</Typography>
       
       <Box className="p-2">
       <BAInput 
       onchange={(e) => setModel({ ...model, email: e.target.value })} type="email"
       label="Email" />
       </Box>
       <Box className="p-2">
       <BAInput 
       onchange={(e) => setModel({ ...model, password: e.target.value })} type="password"
       label="Password" />
       </Box>
       
       <Box className="p-2 text-center mt-2">
       <BAButton type="submit" label="Login" bootstrapstyle="p-3 m-3 bg-success" onclick={signIn} />
       </Box>
       <Box className="text-center">
       <BAButton type="submit" label="Sign Up" bootstrapstyle="p-3 bg-info" onclick={()=>{navigate("/signup")}} />
       </Box>

      
       {/* <Box className="p-2">
       <Typography>Create an account<Button onClick={()=>{navigate("/signup")}}
       variant="text"
        >SignUp</Button></Typography>
       </Box> */}
       </Box>
      </Box>
    </>
    )
    
}
export default Login;