import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../Screens/Home'
import Login from '../../Screens/Login';
import SignUp from '../../Screens/Signup'
import Cardetails from '../../Screens/Cardetails';
import AddCar from '../../Screens/TransporterDashboard/AddCar';
import BookingForm from '../../Screens/BookingForm';
import BookingList from '../../Screens/TransporterDashboard/BookingDetails';
import CarList from '../../Screens/TransporterDashboard/CarList';
import AdminDashboard from '../../Screens/TransporterDashboard/AdminDashboard';
import ProtectedRoute from '../../Components/ProtectedRoute';
import ThankyouPage from '../../Components/ThankyouPage';
function AppRouter() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Cardetails" element={<Cardetails />} />
      <Route path="AddCar/" element={<AddCar />} />
      {/* <Route path="BookingForm/" element={<BookingForm />} /> */}
      <Route path="BookingForm" element ={<ProtectedRoute Component={()=>{ return(<BookingForm/>)}} />}/>
      <Route path="BookingList/" element={<BookingList />} />
      <Route path="CarList/" element={<CarList />} />
      <Route path="AdminDashboard/*" element={<AdminDashboard />} />
      <Route path="ThankyouPage" element={<ThankyouPage />} />

      
    </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
