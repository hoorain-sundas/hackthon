import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../config/firebase/firebasemethods';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import BAButton from '../../Components/BAButton';
import BAInput from '../../Components/BAInput';
import { Box } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BATable from '../../Components/BATable';

function CarList() {
    const [model, setModel] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    let getCarDataFromDB = () => {
        getData("carList")
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
      getCarDataFromDB();
  
    }, []);

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
          key: 'rent'
      },
      {
          displayName: "Availability",
          key: 'availability'
      },
  ];

  return (
    <div>
        <Box>
        <Box className="p-3 m-3 rounded shadow fs-4  border">
          <Row>
            <Col md="3"><span><ArrowBackIcon onClick={goBack} /> Institute </span></Col>
            <Col md="9" className="d-flex justify-content-end"><BAButton label="Add Car" onclick={() => { navigate('../AddCar') }} /></Col>
          </Row>
        </Box>
          <BATable cols={cols} title="All Available Cars" dataSource={model}  />
        </Box>
      
    </div>
  )
}

export default CarList
