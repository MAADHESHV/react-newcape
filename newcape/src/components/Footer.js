import React from "react";
import "./Footer.css"
import img1 from "./img1.JPG"
import img2 from "./img2.png"
import img3 from "./img3.JPG"
import img4 from "./img4.JPG"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"



export default function Footer()
{
    return(
       
      <>
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
  {/* Footer Start */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="footer-blog">
            <h3>QUICK LINKS</h3>
            <div>
              <a href style={{textDecoration: 'none'}}>HOME</a><br />
            </div>
            <div>
              <a href style={{textDecoration: 'none'}}>ACCOMODATION</a><br />
            </div>
            <div>
              <a href style={{textDecoration: 'none'}}>ABOUT</a><br />
            </div>
            <div>
              <a href style={{textDecoration: 'none'}}>CONTACT</a><br />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="footer-insta">
            <h3>GALLERY</h3>
            <a href=""><img src={img1} alt="" /></a>
            <a href=""><img src={img2} alt="" /></a>
            <a href=""><img src={img3} alt="" /></a>
            <a href=""><img src={img4} alt="" /></a>
            <a href=""><img src={img5} alt="" /></a>
            <a href=""><img src={img6} alt="" /></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="footer-tags">
            <h3>PLACES TO VISIT</h3>
            <a href style={{textDecoration: 'none'}}>Vivekananda Rock</a>
            <a href style={{textDecoration: 'none'}}>Thiruvalluvar Statue</a>
            <a href style={{textDecoration: 'none'}}>Maathoor Aqueduct</a>
            <a href style={{textDecoration: 'none'}}>Kanyakumari Beach</a>
            <a href style={{textDecoration: 'none'}}>Sunset Viewpoint</a>
            <a href style={{textDecoration: 'none'}}>Vattakottai Fort</a>
            {/* <a href style={{textDecoration: 'none'}}>Wax Museum</a>
            <a href style={{textDecoration: 'none'}}>Thiruparappu Falls</a>
            <a href style={{textDecoration: 'none'}}>Padmanabhapuram Palace</a>
            <a href style={{textDecoration: 'none'}}>Sanguthurai Beach</a>
            <a href style={{textDecoration: 'none'}}>Our Lady Of Ransom Church</a>
            <a href style={{textDecoration: 'none'}}>Suseendram Temple</a>
            <a href style={{textDecoration: 'none'}}>Triveni Sangam</a> */}

          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="footer-newsletter">
            <h3>NEWSLETTER</h3>
            <div className="form">
              <input className="form-control" placeholder="Your Name" />
              <input className="form-control" placeholder="Your Email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-contact">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h4>CALL NOW</h4>
            <p>+91 9442560567</p>
          </div>
          <div className="col-md-4">
            <h4>EMAIL US</h4>
            <p>newcapehotel@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>GET IN TOUCH</h4>
            <a href><i className="bi bi-twitter" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-youtube" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-pinterest" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="copy-text">
              <p>© <a>NEW CAPE HOTEL</a>. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copy-menu">
              <a href>Terms</a>
              <a href>Privacy</a>
              <a href>Author</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</div>

    </>
   
       
    );
}



