import React from "react";
import "./Contact.css";
import bg_img from "./bg_img.jpg"

export default function Contact()
{
    return(

        <>
        <div style={{backgroundImage:`url(${bg_img})`,backgroundRepeat:"no-repeat"}}>
            <div className="container">
  <div className="innerwrap">
    <section className="section1 clearfix">
      <div className="textcenter">
        <span className="shtext"><h1>Contact Us</h1></span>
        <span className="seperator" />
        <h2>NEW CAPE HOTEL</h2>
      </div>
    </section>
    <section className="section2 clearfix">
      <div className="col2 column1 first">
      <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Cape%20Hotel%205%20-%2069%20Cape%20Road%20%7C%20opp%20Railway%20Station,%20Kanyakumari%20-%20629702%20India+(New%20Cape%20Hotel)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe></div>      
      <div className="col2 column2 last">
        <div className="sec2innercont">
          <div className="sec2addr" style={{textAlign:"left"}}>
            <p><span className="collig"><b> Phone : </b></span> +91 9442560567</p>
            <p><span className="collig"><b> Email : </b></span> newcapehotel@gmail.com</p>
            <p><span className="collig"><b> Address : </b></span> New Cape Hotel 5 - 69 Cape Road | opp Railway Station, Kanyakumari - 629702 India</p>
          </div>
        </div>
        <div className="sec2contactform">
          <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
          <form action>
            <div className="clearfix">
              <input className="col2 first" type="text" placeholder="FirstName" />
              <input className="col2 last" type="text" placeholder="LastName" />
            </div>
            <div className="clearfix">
              <input className="col2 first" type="Email" placeholder="Email" />
              <input className="col2 last" type="text" placeholder="Contact Number" />
            </div>
            <div className="clearfix">
              <textarea name="textarea" id cols={30} rows={7} placeholder="Enter your message here..." defaultValue={""} />
            </div>
            <div className="clearfix"><input type="submit" defaultValue="Send" /></div>
          </form>
        </div>
      </div>
    </section>
  </div>
</div>
</div>

        </>

    );
    
}