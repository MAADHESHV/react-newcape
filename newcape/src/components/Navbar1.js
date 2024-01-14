import './Navbar.css'
import React from 'react'
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Contact from './Contact'
import Content1 from './Content1'
import Feedback from './Feedback'
import Form from './Form'
import Sightseeing from './Gallery'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Admin from './Admin'
import Roomtype from './Roomtype'
import PaymentForm from './PaymentForm'
import Adminrooms from './Adminrooms'
import Update from './Update'
// import Rooms from './Rooms'
// import AddProduct from './AddProduct'



// import './Nav.css'
export default function Nav() {
    return (<> 

        
            <div className='a'>
                
                <Link  to='/' className='logo' style={{marginTop:"100"}}>NEWCAPE</Link>{'   '}
                {/* <Link className='li' to='/'>HOME</Link>{'   '} */}
                <Link  className='li'  to='/Card1'>ACCOMMODATION </Link> {'   '}
                <Link className='li'  to='/feedback'>FEEDBACK</Link>
                <Link className='li'  to='/Sightseeing'>GALLERY</Link>
                <Link className='li'  to='/login'>LOGIN</Link>
                <Link className='li'  to='/Contact'>CONTACTUS</Link>
                {/* <Link className='li'  to='/roomtype'>check</Link> */}
          

              

            </div>
            <Routes>
                <Route path='/' element={<Content1 />} />
                <Route path='/Card1' element={<Card1/>} />
                <Route path='/feedback' element={<Feedback/>} />
                <Route path='/Card3' element={<Card3/>} />
                <Route path='/Card2' element={<Card2/>} />
                <Route path='/Card4' element={<Card4 />} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/Form' element={<Form/>} />
                <Route path='/Sightseeing' element={<Sightseeing/>} />
                <Route path='/login' element={<LoginForm/>} />
                <Route path='/register' element={<RegisterForm/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/roomtype' element={<Roomtype/>} />
                <Route path='/payment' element={<PaymentForm/>} />
                <Route path='/adminrooms' element={<Adminrooms/>} />
                <Route path='/Update' element={<Update/>} />

                {/* <Route path='/rooms' element={<Rooms/>} /> */}
                {/* <Route path='/addproduct' element={<AddProduct/>} /> */}
             
              

                
               
               
             

            </Routes>
            </>
     
    )
}










// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">NEWCAPE</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#card2">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Non Ac</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.1">Non AC 2</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">AC</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Ac2</NavDropdown.Item>
//              <NavDropdown.Item href="#action/3.4"> Ac3</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;



