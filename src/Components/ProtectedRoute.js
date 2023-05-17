import { getAuth } from "../config/firebase/firebasemethods";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { CheckUser } from "../configration/Firebasemethods";
import { CheckUser } from "../config/firebase/firebasemethods";
// import Loader from '../Components/Loading';
import BALoader from "./BALoader";

function ProtectedRoute(props) {
  const { Component } = props;
  const [isUser, setUser] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  let CheckLogin = () => {
    setLoading(true);
    CheckUser()
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        navigate('../login')
        console.log(err)
      })
    
  };


  useEffect(() => { CheckLogin() },
    []);

  return isLoading ? <BALoader/> : <Component/> 
  
      
        
      

      
    
}

export default ProtectedRoute;


{/* <Route path="AdminDashboard/*" element={<ProtectedRoute Component={()=>{ return(<Dashboard/>)}}/>}/> */}