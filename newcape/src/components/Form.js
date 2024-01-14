// import React, { useState } from 'react'
// // import Js from './Js'
// import axios from 'axios'
// import './Form.css'
// import './Submit'
// import {useNavigate} from 'react-router-dom'

// export default function Form() {

//   // var adult=document.getElementById('ad').value;
//   // const [count, setCount] = useState(30)
//   const [booking, setBooking] = useState({
//     name: '',
//     adate: '',
//     ddate: '',
//     child: '',
//     adult: '',
//     roomtype:'',
//     room: 1
//   })
//   const navigate=useNavigate()
//   // function increment() {
//   //   //setCount(prevCount => prevCount+=1);
//   //   setCount(function (prevCount) {
//   //     return (prevCount += 1);
//   //   });
//   // }

//   // function decrement() {
//   //   setCount(function (prevCount,room) {
//   //     if (prevCount > 0) {
//   //       return (prevCount -= 2); 
//   //     } else {
//   //       return (prevCount = 0);
//   //     }
//   //   });
//   // }
//   const bookinguser = (e) => {
//     e.preventDefault()
//     const headers = {
//       'Content-Type': 'application/json'
//     }
//     axios.post('http://localhost:4000/insertbooking', booking
//     ,{
//       headers: headers
//   })
    
//       .then(res => {
//         alert("success")
//         // Navigate()
//         navigate('/payment')
//       }).catch(err => {
//         alert(err)
//       })


//   }
//   const updateField = e => {

//     setBooking({
//       ...booking,
//       [e.target.name]: e.target.value
//     });
  
//   };



//   return (<>
    
  
//  <h1>BOOKING FORM</h1>
// <div style={{display:"flex"}}>

// {/* <div style={{justifyContent:"center",fontSize:"40px"}} ><div style={{backgroundColor:"black",color:"white",height:"200px",width:"200px",marginTop:"20px"}}>Non AC
// <p id="cnt" name="cnt">{count}</p></div>  */}
// {/* <div style={{backgroundColor:"grey",height:"100px",width:"100px"}}>Double</div>
// <div style={{backgroundColor:"grey",height:"100px",width:"100px"}}>Triple</div>
// <div style={{backgroundColor:"grey",height:"100px",width:"100px"}}>Quadriple</div> */}</div>



//     <div className="form " >
   

//       <form onSubmit={bookinguser}>

//         <input style={{ width: "500px", marginBottom: "3px" }} value={booking.name} type="text" name='name' onChange={(e) => updateField(e)} className='name' placeholder="NAME" />

//         <input style={{ width: "500px", marginBottom: "3px" }} value={booking.adate} placeholder="Arrival Date" name='adate' onChange={(e) => updateField(e)} class="textbox-n" type="date" onfocus="(this.type='date')" onblur="(this.type='text')" className='adate' id="date" />

//         <input style={{ width: "500px", marginBottom: "3px" }} value={booking.ddate} placeholder="Departure Date" name='ddate' onChange={(e) => updateField(e)} class="textbox-n" type="date" onfocus="(this.type='date')" onblur="(this.type='text')" className='ddate' id="date" />

//         <input style={{ width: "500px", marginBottom: "3px" }} className='child' value={booking.child} type="number" name='child' onChange={(e) => updateField(e)} placeholder="CHILDREN:" />

//         <input style={{ width: "500px", marginBottom: "3px" }} type="number" id='ad' value={booking.adult} name='adult' onChange={(e) => updateField(e)} className='adult' placeholder="ADULT:" />
//         <select style={{ width: "500px", marginBottom: "3px" }}  value={booking.roomtype} onChange={(e) => updateField(e)} name="roomtype" id="">
//         <option value="nonac">Non AC Double</option>
//         <option value="double">Dulexe Double Bed Ac</option>
//         <option disabled  value="triple">Dulexe Triple Bed Ac</option>
//         <option  disabled value="quadriple">Dulexe Quadriple Bed Ac</option>

//       </select>
     


//         <input style={{ width: "500px", marginBottom: "3px" }} className='room' value={booking.room} name='room' onChange={(e) => updateField(e)} type="number" placeholder="NO OF ROOMS" />
//         {/* <Js/> */}
//         <br /> <br />



// {/* <p>{c}</p> */}
//   <h1>Pay: 
// {booking.roomtype=='nonac'?booking.room*1000:booking.room*2000}</h1>
// {/* {booking.roomtype=='nonac'?booking.room*1000:booking.room*2000} */}
// {/* 
//         <button style={{ width: "200px", marginLeft: "150px" }} className='submit1' onClick={decrement}>BOOK </button><br /><br /> */}
//         <button style={{ width: "200px", marginLeft: "150px" }} className='submit1' type="submit">Submit</button>
//       </form></div>

//       {/* <p>{booking.room*100}</p> */}
//   </>
//   )
// }






import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import './Submit'
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [booking, setBooking] = useState({
    name: '',
    adate: '',
    ddate: '',
    child: '',
    adult: '',
    roomtype: 'nonac',
    room: 1,
  });
  const navigate = useNavigate();
  const [totalDays, setTotalDays] = useState(0); // State to store the total number of days
  const [totalAmount, setTotalAmount] = useState(0); // State to store the total amount

  const updateField = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = () => {
    const startDate = new Date(booking.adate);
    const endDate = new Date(booking.ddate);

    if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const timeDifference = endDate - startDate;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setTotalDays(daysDifference);

      const roomRate = booking.roomtype === 'nonac' ? 1000 : 2000;
      const totalAmount = roomRate * booking.room * daysDifference;
      setTotalAmount(totalAmount);
    } else {
      setTotalDays(0);
      setTotalAmount(0);
    }
  };

  const bookingUser = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
    };

    const totalPayment = totalAmount;

    const bookingData = {
      ...booking,
      totalPayment,
    };

    axios
      .post('http://localhost:4000/insertbooking', bookingData, {
        headers: headers,
      })
      .then((res) => {
        alert('Booking successful');
        navigate('/payment');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h1>BOOKING FORM</h1>
      <form onSubmit={bookingUser}>
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          value={booking.name}
          type="text"
          name="name"
          onChange={updateField}
          placeholder="NAME"
        />
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          value={booking.adate}
          placeholder="Arrival Date"
          name="adate"
          onChange={updateField}
          type="date"
        />
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          value={booking.ddate}
          placeholder="Departure Date"
          name="ddate"
          onChange={updateField}
          type="date"
        />
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          className="child"
          value={booking.child}
          type="number"
          name="child"
          onChange={updateField}
          placeholder="CHILDREN:"
        />
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          type="number"
          value={booking.adult}
          name="adult"
          onChange={updateField}
          placeholder="ADULT:"
        />
        <select
          style={{ width: '500px', marginBottom: '3px' }}
          value={booking.roomtype}
          onChange={updateField}
          name="roomtype"
        >
          <option value="nonac">Non AC Double</option>
          <option value="double">Deluxe Double Bed AC</option>
        </select>
        <input
          style={{ width: '500px', marginBottom: '3px',marginLeft:'360px' }}
          className="room"
          value={booking.room}
          name="room"
          onChange={updateField}
          type="number"
          placeholder="NO OF ROOMS"
        />
        <br />
       
        <button
          style={{ width: '200px', marginLeft: '150px',marginLeft:'-30px' }}
          className="submit1"
          type="button"
          onClick={calculateTotal}
        >
          Calculate Total
        </button>
        {/* <h1>Total Days: {totalDays}</h1> */}
        <br/>
        <h1>Total Amount: {totalAmount}</h1>
        <button
          style={{ width: '200px', marginLeft: '150px',marginLeft:'-30px' }}
          className="submit1"
          type="submit"
        >
          Submit
        </button>
        
      </form>
      <br/>
    </div>
  );
}
