import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, Route, Routes, } from 'react-router-dom';
import BookingForm from '../BookingForm';
import BookingDetails from './BookingDetails';
import CarList from './CarList';
import AddCar from './AddCar';
const drawerWidth = 240;

export default function AdminDashboard() {
    
    const [menuList, setMenuList] = React.useState([
        {
          name: "Booking Details",
          route: "BookingDetails",
        },
        {
            name: "Car List",
            route: "CarList",
        },
        
      ]);
    
      let navigate = useNavigate();
      let changeScreen = (route) => {
        navigate(route);
      };
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Transporter DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuList.map((x, index) => (
            <ListItem onClick={() => changeScreen(x.route)}
              key={index} 
              disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={x.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* <InstituteListing /> */}
        <Routes>
          {/* <Route path="BookingForm/" element={<BookingForm />} /> */}
          <Route path="BookingDetails/" element={<BookingDetails />} />
          <Route path="CarList/" element={<CarList />} />
          <Route path="AddCar/" element={<AddCar />} />

          
        </Routes>
      </Box>
    </Box>
  );
}