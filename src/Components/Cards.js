import React from 'react'
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BALoader from '../Components/BALoader';
import { useNavigate } from 'react-router-dom';
import BAButton from '../Components/BAButton';
import './Cards.css';
import BALoader from './BALoader'
import { getData } from '../config/firebase/firebasemethods';

function Cards() {
  
    // const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [carData, setCarData] = useState({}) ;
    const [isLoading, setIsLoading] = useState(true);

    let getCarDataFromDB = () => {
      getData("carList")
        .then((res) => {
          console.log(res);
          setCarData(Object.values(res))
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    useEffect(()=>{
      getCarDataFromDB();
    },[])

const [bookingData, setBookingData] = useState([])
const BookingInfo = (e) => {
      setBookingData(...bookingData, e )
      navigate("../BookingForm",{state:e})
      console.log(bookingData)
    }
    
   
   const sendData = (e) => { 
     console.log(e);
     navigate("/Cardetails", {
      state: e,
    });
   }
  return (
    <div className='row m-2' >
        {/* {isLoading ? */}
        {/* //  <BALoader /> : */}
        {isLoading? <BALoader /> :
        <div className="cards row" >
            {carData.map((x,i) => (
            <div className='col-md-4'>
              <div className="cards-preview" onClick={() => sendData(x)} key={x.id}>
                  <div className="image">
                     <img src={x.imageUrl}  />
                  </div>
                  <div className="data">
                     <h4> {x.carName}</h4>
                  </div>
                  <div> <p>Model: {x.car_model}</p>
                  <h6>Price: {x.rent}</h6>
                  </div>
                  <BAButton label="Book Now" bootstrapstyle="m-2" onclick={(e)=>{ e.stopPropagation();   BookingInfo(x) }} />
                  {/* <div className="btns" onClick={() => sendData(x)}> <button>Add to cart</button> </div> */}
               </div>
           </div>    
          ))
          }   
        </div>}
        {/* } */}
     </div>
  )
 }

export default Cards;
