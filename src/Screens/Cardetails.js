import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from '@mui/system';
import Navbar from '../Components/Navbar';

function Cardetails() {
    const location = useLocation();
    console.log(location);
  return (
    <>
       <Navbar />
      <div className="text-center shadow rounded mt-5 p-5">
         <Container>
            <Row>
               <Col md={6}>
                  <div className="text-center d-block shadow rounded p-2">
                     <img src={location.state.image} width="100%" height="350px"/>
                  </div>
               </Col>
               <Col md={6}>
                  <div className="text-center d-block p-5">
                     <h5>{location.state.carName}</h5>
                     {/* <br></br> */}
                     <br></br>
                     <hr></hr>
                     <p>Model: {location.state.car_model}</p>

                     <p>Color: {location.state.car_color}</p>
                     
                     <p>Model Year: {location.state.car_model_year}</p>

                     <p>GPS: {location.state.gps}</p>

                     <p>USB_Port: {location.state.USB_Port}</p>
                     
                     <p>Car AC: {location.state.Car_AC}</p>

                     <p>Car AC: {location.state.availability}</p>
                     
                     <h6>Price: {location.state.rent}</h6>
                  </div>  
               </Col>  
           </Row>
         </Container>
      </div>
         
    </>
  )
}

export default Cardetails;

                 

