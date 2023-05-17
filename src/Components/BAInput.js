import { TextField } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BAInput(props) {
    const {label, bootstrapstyle, type, onchange, value, disabled} = props;
    return(
    <>
     <TextField variant="outlined" disabled={disabled} value={value} className={bootstrapstyle} label={label} onChange={onchange} size="normal" type={type} />
    </>
    )
}