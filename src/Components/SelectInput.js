import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

export default function BasicSelect(props) {
    const {obj,path, value, bootstrapstyle, label, onchange} = props;
  // const [selectData, setSelectData] = useState('');

  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   setSelectData(event.target.value);
  //   onchange();
  //   // navigate({path},{state:selectData});
  //   // console.log(selectData);
  // };

  return (
    <Box className={bootstrapstyle}>
      <FormControl fullWidth>
        <InputLabel /*id="demo-simple-select-label"*/>{label}</InputLabel>
        <Select sx={{width:"224px"}}
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={value}
          label={label}
          onChange={onchange}
          // onChange={handleChange}
        >
          {
            obj && Array.isArray(obj) ?
             obj.map((x,i)=>{
              console.log(x,"===>");
             return( 
             <MenuItem key={i} value={x}>{x}</MenuItem>
             )

            })
            :null
          } 
        </Select>
      </FormControl>
    </Box>
  );
}