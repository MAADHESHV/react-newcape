import Button from 'react-bootstrap/Button';
import Card3 from './Card3'
import {Link} from 'react-router-dom';
import Form from './Form';
import img4 from './img4.JPG'

function Card2() {
  return (
    <>
   
    
    <br/>
    <br/>
    <br/>
<br/> <div data-aos="zoom-in"><img style={{width:'35rem',float:'left',marginLeft:'40px'}} src={img4} alt="" /></div>   
    <br/>
    <br/>
    <div data-aos="flip-up" >  <h2 style={{fontWeight:"bold"}}>
      
      Deluxe Double Bed Ac Room
      <br />
      <br />
      </h2>
  </div>
  <h5 style={{ fontFamily: "Lexend Mega"
  }}>
      Deluxe AC Room Each room features a double bed, an attached bathroom, and a balcony. It also has a geyser, an LCD TV, and other conveniences. Each room faces the lake and guarantees complete solitude.
      </h5>
   <div data-aos="zoom-in"><h2  style={{fontWeight:"bold"}}>
        Tarrif:$2000
    </h2></div>
    
    <br/>
    <Link to="/Form">
   <Button className='button' onClick={<Form/>}>Book Rooms</Button></Link>
   <Card3/>
</>
  );
}

export default Card2;