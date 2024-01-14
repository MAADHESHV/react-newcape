import React,{useRef} from 'react';
import './Feedback.css'
import emailjs from '@emailjs/browser';
export default function Feedback(){
const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3ueh606', 'template_hw3yvql', form.current, '2_9kNdkaq01rmH2LU')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
      
        <div className='body1'>
        <div className='form1'>
        <h1>FEEDBACK FORM</h1>
        <br />
        <form ref={form} onSubmit={sendEmail}>
      
      <input style={{marginBottom:"6px"}}type="text" placeholder="NAME"name="user_name" />
    
      <input style={{marginBottom:"6px"}} type="email" placeholder="EMAIL" name="user_email" />
     
      <textarea style={{marginBottom:"6px"}} name="message" placeholder="FEEDBACK" />
      <input className="submit1"  type="submit" value="Send" />
      <br /><br /><br />
      <br /><br />
    </form>
   
    </div></div>
    {/* <img src="https://newcapehotel.com/wp-content/uploads/elementor/thumbs/W3A6074-scaled-pz8r49mwq7rfp7b3zmvvzhcw2ov87eirnp6gjyeraw.jpg" alt="" /> */}
    </>
    );
}