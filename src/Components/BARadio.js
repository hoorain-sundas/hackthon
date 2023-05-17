import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function BARadio() {

    return(
       <div className="m-5 w-50">
         <FormControl className='d-inline' >
            <FormLabel id='demo-radio-buttons-group-label'> Gender </FormLabel>
               <RadioGroup className=' ms-5'
               aria-labelledby="demo-radio-buttons-group-label"
               defaulValue="female"
               name="radio-buttons-group"> 
                <FormControlLabel  value="female" control={<Radio />} label="Female"></FormControlLabel>
                <FormControlLabel  value="male" control={<Radio />} label="Male"></FormControlLabel>
               </RadioGroup>
            
        </FormControl>
       </div>
    )
}



