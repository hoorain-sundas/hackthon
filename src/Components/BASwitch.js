import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function BASwitch(props) {
  const {label, onchange} = props;
  const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <Switch
      // checked={checked}
      onChange={onchange}
      inputProps={label}
    />
  );
}