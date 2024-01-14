
//https://youtu.be/3yIFenltv0E

import React ,{ useEffect}from 'react';
import './Content2.css';
import AOS from 'aos';

export default function Content2(){
    useEffect(()=>{
      AOS.init({duration:2000})
    },[])
    
    return(
<div className='top'>
    <div className='animation' data-aos="fade-up">
        <img className="img" src="https://newcapehotel.com/wp-content/uploads/2022/12/1W3A4189-2048x1365.jpg" alt="" />
    </div>
    

    <div className='animation'  data-aos="fade-rigth"></div>
    <h1>flip</h1>
    <div className='animation1'  data-aos="flip-right"> <h1>newcape</h1></div>
    <h1>zoom</h1>
    <div className='animation'  data-aos="zoom-in"><img className="img" src="https://newcapehotel.com/wp-content/uploads/2022/12/1W3A4189-2048x1365.jpg" alt="" /></div>
    <br></br> <br />
</div>
    );
}