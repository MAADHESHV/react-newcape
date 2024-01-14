import React,{useEffect}from 'react';
import './Scard1.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Scard2 from './Scard2'
import Card from 'react-bootstrap/Card'
import Card1 from './Card1'
import Card2 from './Card2'
import {Link} from 'react-router-dom'
import img1 from './img1.JPG'
import img2 from './img2.png'
import img3 from './img3.JPG'
import img4 from './img4.JPG'
import img5 from './img5.jpg'


export default function Scard1() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    
    <>
   <br /><br />
   
   <center><h1>ROOMS&SUITES</h1></center> <br></br>
    <div className="main">
 
  
<Card style={{height:"200px ",marginLeft:"10px"}}>
<div className='card-img-overlay'>
 
  </div>
  <Link to="/Card1">
  <Card.Img data-aos="zoom-in" onClick={<Card1/>} style={{height:"350px",width:"350px"}} src={img1}/>
</Link>
</Card>
<Card style={{height:"200px ",marginLeft:"10px"}}>
<div className='card-img-overlay'>
  <h3 className='card-title' style={{marginTop:"30px",color:"white",fontFamily: 'Playfair Display'}}>Std bgt Non-AC Rooms</h3>
  </div>
  <Link to="/card2">
  <Card.Img data-aos="zoom-in" onClick={<Card2/>} style={{height:"350px",width:"350px"}} src={img2}/>
  </Link>
</Card>
<Card style={{height:"200px ",marginLeft:"10px"}}>
<div className='card-img-overlay'>
 
  </div>
  <Link to="/Card3">
  <Card.Img data-aos="zoom-in"  style={{height:"350px",width:"350px"}} src={img3}/>
  </Link>
</Card>




</div>
<br /><br />
<br /><br />
<br /><br />


<div className='main'>
<Card style={{height:"200px ",marginLeft:"10px"}}>
<div className='card-img-overlay'>
  <h3 className='card-title' style={{marginTop:"50px",color:"white",fontFamily: 'Playfair Display'}}>Dulexe AC Rooms</h3>
  </div>
  <Link to="card3">
  <Card.Img data-aos="zoom-in"  style={{height:"350px",width:"350px"}} src={img4}/>
  </Link>
</Card>
<Card style={{height:"200px ",marginLeft:"10px"}}>
  <div className='card-img-overlay'>
  <h3 className='card-title' style={{marginTop:"50px",color:"white",fontFamily: 'Playfair Display'}}>Triple Bed Room</h3>
  </div>
  <Link to="card4">
  
  <Card.Img data-aos="zoom-in"  style={{height:"350px",width:"350px"}} src={img5}/>
</Link>
</Card>
</div>
<Scard2/>



    </>
  );
}