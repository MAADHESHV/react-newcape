import React,{useEffect} from 'react';
import img6 from './img6.jpg'

import AOS from 'aos';

export default function Scard2(){
    var style1={
        height:400,
        width:500,
        float:"left",
        marginLeft:40,
        marginRight:10,

fontFamily: 'Playfair Display'
    };
    useEffect(()=>{
        AOS.init({duration:2000})
      },[])
    
    return(
        
        <div>
<br /><br /><br /> <br /> <br/>


            <h1 style={{fontFamily: 'Playfair Display',fontWeight:"bold"}} data-aos="flip-right">About Us</h1> <br/>
            <img data-aos="zoom-in" style={style1} src={img6} alt="" />
            <br></br>
            
            
            <div sttyle={{padding:20}}>
                <h1 style={{fontFamily: 'Playfair Display',fontWeight:"bold"}} data-aos="flip-right">New Cape</h1><br></br>
                <h3 style={{fontFamily: 'Playfair Display',  marginRight:"10"}}>The New Cape Hotel  invites every tourist with great hospitality and successfully reflects the character and culture of its surrounds. With the faultless integration of modern decor in the opulent interiors, the hotel has elevated the level of services well above those of its guests. The concept of anticipatory, intuitive service makes for an unrivalled customer experience.</h3></div>
            
                <br ></br><br ></br><br ></br>  


        </div>
       
    );
}
