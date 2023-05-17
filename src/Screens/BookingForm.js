import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import BAInput from '../Components/BAInput';
import BasicSelect from '../Components/SelectInput';
import BAButton from '../Components/BAButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { getData, postFBData } from '../config/firebase/firebasemethods';
import BATable from '../Components/BATable';
import { Container,Row,Col } from 'react-bootstrap';


function BookingForm() {
    const navigate = useNavigate();
    const locationData = useLocation().state;
    console.log(locationData);

    const [model, setModel] = useState([]);
    
    const cols = [
      {
          displayName: "Car",
          key: 'carName'
      },
      {
          displayName: "Model",
          key: 'car_model'
      },
      {
          displayName: "Color",
          key: 'car_color'
      },
      {
          displayName: "Year",
          key: 'car_model_year'
      },
      {
          displayName: "AC",
          key: 'Car_AC'
      },
      {
          displayName: "Price",
          key: 'price'
      },
      {
          displayName: "Availability",
          key: 'availability'
      },
  ]

  const getCarData = ()=>{
    getData("carList").then((res)=>{
      console.log(res);
    }).catch((err)=>{})
  }

//   const setData=()=>{
//     setModel(locationData);
//   }
  useEffect(()=>{
    // setData();
  },[])


    
    const confirmation = [
        "confirmed", 
        "not-confirmed",
    ];
    const submitBookingForm = () => {
        postFBData("bookingData", bookData) 
        .then((res) => {
          console.log(res);
         navigate('../ThankyouPage');
       }) 
       .catch((err) => {
          console.log(err);
       })
      }
  const [bookData, setBookData] = useState({})
  return (
    <div style={{overflow: "hidden"}}>
      <div className='row'>
          <div className='col-md-6'>
              <div>
                  <Typography variant='h4'>Car Details</Typography>
                  <div className="text-center d-block shadow rounded p-2 mt-3">
                     <img src={locationData.imageUrl} width="100%" height="400px"/>
                  </div>
                  <br/>
                  <Container>
                    <Row>
                        <Col sm={12} md={3}><b>Car :</b> {locationData.carName}</Col>
                        <Col sm={12} md={3}><b>Model :</b> {locationData.car_model}</Col>
                        <Col sm={12} md={3}><b>Color :</b> {locationData.car_color}</Col>
                        <Col sm={12} md={3}><b>Year :</b> {locationData.car_model_year}</Col>
                        <Col sm={12} md={3}><b>Availability :</b> {locationData.availability}</Col>
                        <Col sm={12} md={3}><b>Ac :</b> {locationData.ac}</Col>
                        <Col sm={12} md={3}><b>Gps :</b> {locationData.gps}</Col>
                        <Col sm={12} md={3}><b>Rent :</b> {locationData.rent}</Col>
                        
                    </Row>
                  </Container>
                  {/* <BATable dataSource={model} title="" cols={cols} /> */}
              </div>
          </div>
          <div className='col-md-6'>
             <div>
                <Typography variant='h4'> Booking Form</Typography>
                <div style={{marginTop: "40px"}}>
                <form>
                    <BAInput label="Starting Location" bootstrapstyle="m-2 w-25" onchange={(e) => setBookData({...bookData, startLocation: e.target.value})} />
                    <BAInput label="Ending Location" bootstrapstyle="m-2 w-25" onchange={(e) => setBookData({...bookData, endLocation: e.target.value})} />
                    <BAInput  disabled="disabled" value={locationData.rent} bootstrapstyle="m-2 w-25"  />
                    <BAInput label="Date of Booking" type="date" bootstrapstyle="m-2 w-25" onchange={(e) => setBookData({...bookData, dateOfBooking: e.target.value})} />
                    <BAInput label="Rent Booking Start Time" bootstrapstyle="m-2 w-25" onchange={(e) => setBookData({...bookData, startTime: e.target.value})} />
                    <BAInput label="Rent Booking End Time" bootstrapstyle="m-2 w-25" onchange={(e) => setBookData({...bookData, endTime: e.target.value})} />
                    <BasicSelect obj={confirmation} bootstrapstyle="m-2 w-50" label="Confirmation" onchange={(e) => setBookData({...bookData, confirmation: e.target.value})} />
                    <BAButton label="Confirm Booking" bootstrapstyle="p-2 m-3" onclick={submitBookingForm} />


                </form>
                </div>
            </div>  
          </div>

      </div>
    </div>
  )
}

export default BookingForm;
