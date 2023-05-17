import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Cards from '../Components/Cards'
import slider1 from '../images/Slider1.jpg'

import { Typography } from '@mui/material';
import {Box} from '@mui/material';
import BASearchbar from '../Components/BASearchbar'
import Navbars from '../Components/Navbar';


function Home(){

    return (
        <div>
            <Box style={{overflow: 'hidden'}}>
                <Navbars />
                <div className='row'>
                <div className='col-md-12'>
                <div style={{width: "100%",  }}><img src={slider1} width="100%" height="500px" /></div>
                </div>
                </div>
                {/* <Typography variant='h5' className='p-3 m-3 color-success'>Rent A Car Application </Typography> */}
                {/* <Box><BASearchbar searchList={carData}  /></Box> */}
                <Cards />
            </Box>
        
        </div>
    
    );
}

export default Home;