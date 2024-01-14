import Button from 'react-bootstrap/Button';
import Card2 from './Card2';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import './cards.css'
import img6 from './img6.jpg'
// import LoginForm from './LoginForm';
function Card1() {
  return (
    <>
 
    

   
    <br/>
    <div data-aos="zoom-in"><img style={{width:'35rem',float:'left',marginLeft:'40px'}} src={img6} alt="" /></div>

    
    <br/>
   <div data-aos="flip-up"></div>
    <h2 style={{ fontWeight:"bold"}}>
        Non AC Double
    </h2>
    <br></br>

<div><h5 style={{ fontFamily: "Lexend Mega" }}>
    The modern amenities-filled Double AC room comfortably fits two guests as well as small children. They are cosy for both short stays and extended ones..
    </h5></div>
    
   
    <div data-aos="zoom-in"><h2  style={{fontWeight:"bold"}}>
        Tarrif:$1000
    </h2></div>

   <br></br>
   <Link to="/login">
   <Button className='button' onClick={<LoginForm/>}>Book Rooms</Button></Link>
    
<Card2/>
    </>
  );
}

export default Card1;