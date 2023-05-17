import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import { signOutUser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';
function Navbars() {
  // const navigate = useNavigate();
  const carData = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
        carName: "Mitsubishi",
        car_model: "Montero",
        car_color: "Yellow",
        car_model_year: 2002,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 26000",
        availability: false,
      },
    {
        id: "2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr8fSvGEMJMrasCAIm2YYA303QNV_1Uyfr0oUCGidnudxKJaM3KKEdTgViv4RmlNbyTk&usqp=CAU",
        carName: "Volkswagen",
        car_model: "Passat",
        car_color: "White",
        car_model_year: 2008,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 28000",
        availability: false,
      },
      {
        id: "3",
        image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
        carName: "Saturn",
        car_model: "L-Series",
        car_color: "Red",
        car_model_year: 2010,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 30000",
        availability: true,
      },
      {
        id: "4",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
        carName: "Mitsubishi",
        car_model: "Montero",
        car_color: "Yellow",
        car_model_year: 2002,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 26000",
        availability: false,
      },
    {
        id: "5",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr8fSvGEMJMrasCAIm2YYA303QNV_1Uyfr0oUCGidnudxKJaM3KKEdTgViv4RmlNbyTk&usqp=CAU",
        carName: "Volkswagen",
        car_model: "Passat",
        car_color: "White",
        car_model_year: 2008,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 28000",
        availability: false,
      },
      {
        id: "6",
        image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
        carName: "Saturn",
        car_model: "L-Series",
        car_color: "Red",
        car_model_year: 200,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 30000",
        availability: true,
      },
      {
        id: "7",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
        carName: "Mitsubishi",
        car_model: "Montero",
        car_color: "Yellow",
        car_model_year: 2002,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 26000",
        availability: false,
      },
    {
        id: "8",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdr8fSvGEMJMrasCAIm2YYA303QNV_1Uyfr0oUCGidnudxKJaM3KKEdTgViv4RmlNbyTk&usqp=CAU",
        carName: "Volkswagen",
        car_model: "Passat",
        car_color: "White",
        car_model_year: 2008,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 28000",
        availability: false,
      },
      {
        id: "9",
        image: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
        carName: "Saturn",
        car_model: "L-Series",
        car_color: "Red",
        car_model_year: 200,
        GPS: "Yes",
        USB_Port: "Yes",
        Car_AC: "Yes",
        price: "Rs. 30000",
        availability: true,
      },
]
  const searchElem = (e) => {
    const results = carData.filter(function (x){
      return( x.carName.toLowerCase().includes(e))
       
    })
    console.log(results);
  }
  let logout = () => {
    signOutUser();
    // navigate("/");
  }
  return (
    <Navbar  expand="lg" className='bg-warning text-white'>
      <Container fluid>
        {/* <Navbar.Brand href="#"><img src={noonlogo} width="100px" /></Navbar.Brand> */}
       <Link to="/"><Navbar.Brand ><img src={logo} width="50px" className='rounded-circle' /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> <span className='fs-4 fw-bold text-secondary'>Rent A Car Application</span> </Nav.Link>
          
          </Nav>
          <Form className="d-flex onsearch" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ss "
              aria-label="Search"
              onChange={(e) => {searchElem(e)}}
            />
            {/* <Button variant="outline-success" className="search">العربية</Button> */}
           <Link to="/login"><Button variant="outline-success" className="search">Login</Button></Link> 
           <Button variant="outline-success" className="search" onClick= {logout}>Logout</Button>

            <Button variant="outline-success" className="search">Cart</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;