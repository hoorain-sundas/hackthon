import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../config/firebase/firebasemethods';
import { useEffect } from 'react';
import BATable from '../../Components/BATable';

function BookingDetails() {
    const [model, setModel] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();
    let getBookingDataFromDB = () => {
        getData("bookingData")
          .then((res) => {
            console.log(model);
            setModel(Object.values(res))
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      const goBack = () => {
        window.history.back();
   }
    useEffect(() => {
      getBookingDataFromDB();
  
    }, []);

    const cols = [
      {
          displayName: "Car",
          key: 'car'
      },
      {
          displayName: "Starting Time",
          key: 'startTime'
      },
      {
          displayName: "Ending Time",
          key: 'endTime'
      },
      {
          displayName: "Starting Location",
          key: 'startingLocation'
      },
      {
          displayName: "Ending Location",
          key: 'endingLocation'
      },
      {
          displayName: "Cost",
          key: 'cost'
      },
      {
          displayName: "Confirmation",
          key: 'confirmation'
      },
      
  ]

  return (
    <div>
       <BATable cols={cols} dataSource={model} />
    </div>
  )
}

export default BookingDetails;
