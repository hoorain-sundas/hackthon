import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postFBData } from '../../config/firebase/firebasemethods';
import { Box, Typography } from '@mui/material';
import BAInput from '../../Components/BAInput';
import BasicSelect from '../../Components/SelectInput';
import BAButton from '../../Components/BAButton';
function AddCar() {
    const navigate = useNavigate();
    const [model, setModel] = useState({
        visibility: true,
    })
    const submitCarForm = () => {
        postFBData("carList", model) 
        .then((res) => {
          console.log(res);
         navigate('../CarList', {
            state: res,
          });
       }) 
       .catch((err) => {
          console.log(err);
       })
      }
      const gps = [
        "Yes",
        "No"
      ]
      const USB_Port = [
        "Yes",
        "No"
      ]
      const Car_AC = [
        "Yes",
        "No"
      ]
      const availability = [
        "Yes",
        "No"
      ]
  return (
    <>
      <Box>
          <Typography variant='h5'>Add Car Form</Typography>
          <form>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Car Name" 
                 onchange={(e) => setModel({...model, carName: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Car Model" 
                 onchange={(e) => setModel({...model, car_model: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Car Color" 
                 onchange={(e) => setModel({...model, car_color: e.target.value })} 
                 style={{ width: "100%" }}  />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Model Year" 
                 onchange={(e) => setModel({...model, car_model_year: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BasicSelect label="GPS" obj={gps}
                 onchange={(e) => setModel({...model, gps: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BasicSelect label="USB Port" obj={USB_Port}
                 onchange={(e) => setModel({...model, USB_Port: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BasicSelect label="Car AC" obj={Car_AC}
                 onchange={(e) => setModel({...model, Car_AC: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Car Image Url" 
                 onchange={(e) => setModel({...model, imageUrl: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BasicSelect label="Availability" obj={availability}
                 onchange={(e) => setModel({...model, availability: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box sx={{ display: "inline-block", marginLeft: "10px", margin:"10px" }}>
                 <BAInput label="Rent" 
                 onchange={(e) => setModel({...model, rent: e.target.value })} 
                 style={{ width: "100%" }} />
              </Box>
              <Box>
                 <BAButton type="submit" label="Submit" bootstrapstyle="p-3 m-5" onclick={submitCarForm}  />
              </Box>
          </form>
      </Box>
    </>
  )
}

export default AddCar
