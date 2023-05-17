import {Button} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BAButton (props) {
    const {label, bootstrapstyle, onclick} = props;
    return(
        <>
        <Button 
        variant="contained" className={bootstrapstyle} onClick={onclick} >{label} 
        {/* <CircularProgress  /> disabled */}
        </Button>
        </>
    )
   
}