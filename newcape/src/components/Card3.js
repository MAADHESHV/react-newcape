import Button from 'react-bootstrap/Button';
import Card4 from './Card4'
import {Link} from 'react-router-dom';
import Form from './Form';
import img3 from './img3.JPG'

function Card3() {
  return (
    <>
 
   
    <br/>
    <br/>
<br/>   <div data-aos="zoom-in"><img style={{width:'35rem',float:'left',marginLeft:'40px'}} src={img3} alt="" /></div> 
  <br />
    <div data-aos="flip-up"> <h2 style={{fontWeight:"bold"}}>
    Deluxe Triple Bed Ac room
    </h2>
</div><br />
<h5 style={{    fontFamily: "Lexend Mega"
}}>
    Deluxe AC Room The Deluxe Room can house 3 people and is marginally bigger than the Deluxe Room. A double bed and a single bed are in the room.
    </h5>
    <br/>
    <div data-aos="zoom-in"> <h2 style={{fontWeight:"bold"}}>
        Tarrif:$3000
    </h2></div>
    
    <br/>
    <Link to="/Form">
   <Button className='button' onClick={<Form/>}>Book Rooms</Button></Link>
   <Card4/>
</>
  );
}

export default Card3;