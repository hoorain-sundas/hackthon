import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AlarmIcon from '@mui/icons-material/Alarm';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BAIconButton(props) {
    const [onclick, icon, label] = props;
  return (
    <Stack direction="row" spacing={1}>
    {/* //   <IconButton onClick={onclick} aria-label={label}>
    //     {icon}
    //   </IconButton> */}
      <Button
      aria-label={label} Icon={icon} onClick={onclick}
    >
      
    </Button>
    
     </Stack>
  );
}