import Button from 'react-bootstrap/Button';
import React,{useEffect} from 'react';
import AOS from 'aos';
import {Link} from 'react-router-dom';
import Form from './Form';
import img4 from "./img4.JPG"


function Card4() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <>
 
   
    <br/>
    <br/>

<br/>   
<div data-aos="zoom-in"> <img style={{width:'35rem',float:'left',marginLeft:'40px'}}  src={img4} alt="" /></div> 
    <br/>
    <br/>
    <div data-aos="flip-up"><h2 style={{fontWeight:"bold"}}>
     
     Deluxe Quadruple Ac Room
     
     </h2>
 </div> 
 <h4 style={{    fontFamily: "Lexend Mega"
 }}>
     The Deluxe Quadruple Room has air conditioning, a sofa, and other conveniences. This room is ideal for a family and is equipped with everything needed. And Deluxe AC Room
     </h4>
    <br/>
    <div data-aos="zoom-in"> <h2 style={{fontWeight:"bold"}}>
        Tarrif:$4000
    </h2></div>
    
    <br/><Link>
    <Button className='button' onClick={<Form/>}>Book Rooms</Button></Link>
</>
  );
}

export default Card4;