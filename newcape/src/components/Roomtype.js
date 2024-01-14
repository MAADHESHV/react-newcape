// import React , { useState } from 'react';
// import axios from 'axios'
// import './Form.css'
// import './Submit'
// export default function Roomtype(){
// const [roomtype, setroomtype] = useState({
//         roomname:'',
//          roomcount:'',
//          imglink:'',
//          rate:''
       
//   })
// const Roomtyped = (e) => {
//         e.preventDefault()
//         const headers = {
//           'Content-Type': 'application/json'
//         }
//         axios.post('http://localhost:4000/insertbookingmodel',roomtype
//         ,{
//           headers: headers
//       })
      
//       .then(res => {
//             alert("success")
//           }).catch(err => {
//             alert(err)
//           })
    
//       }
//       const updateField = e => {
    
//         setroomtype({
//           ...roomtype,
//           [e.target.name]: e.target.value
//         });
//       };




// return(
//     <>
//     <form onSubmit={Roomtyped} >
//       <br />
// <h2>Admin Form</h2>


// Room Name: <br />
// <select style={{width:"50%"}}  value={roomtype.roomname} onChange={(e) => updateField(e)} name="roomname" id="">

//     <option value="Non AC Double">Non AC Double </option>
//     <option value="Duluxe double bed AC">Duluxe double bed AC</option>
//     <option value="Duluxe Triple bed AC">Duluxe Triple bed AC</option>
//     <option value="Duluxe Quadruple bed AC">Duluxe Quadruple bed AC</option>
// </select> <br />
// <br />
// <input style={{width:"50%"}}placeholder="ROOMCOUNT:" name='roomcount' value={roomtype.roomcount} onChange={(e) => updateField(e)}type="text" /> <br /> 
// <br />

// <input style={{width:"50%"}}  placeholder="IMG LINK:"name='imglink' value={roomtype.imglink} onChange={(e) => updateField(e)}type="text" /> <br /> <br />

// <input style={{width:"50%"}} name='rate'  placeholder="ROOM RATE:" value={roomtype.rate} onChange={(e) => updateField(e)}type="number" />
// <br /> <br />
// <button type='submit' className='submit1'>submit</button>

//     </form>
    
//     </>
// )
// }
// // //controller insert delete update

// // import React, { useState } from 'react';
// // import axios from 'axios';

// // export default function Roomtype() {
// //   const [roomType, setRoomType] = useState('');

// //   const handleRoomTypeChange = (event) => {
// //     setRoomType(event.target.value);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const roomNumber = 123; // replace with the actual room number
// //     const response = await axios.put(`/rooms/${roomNumber}/${roomType}`);
// //     console.log(response.data);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         AC
// //         <input type="radio" name="roomType" value="AC" onChange={handleRoomTypeChange} />
// //       </label>
// //       <label>
// //         Non-AC
// //         <input type="radio" name="roomType" value="non-AC" onChange={handleRoomTypeChange} />
// //       </label>
// //       <button type="submit">Book Room</button>
// //     </form>
// //   );
// // }





import React, { useState } from 'react';
import axios from 'axios';

export default function Roomtype() {
  const [roomtype, setRoomtype] = useState({
    roomname: '',
    roomcount: '',
    imglink: null, // Store the image file here
    rate: '',
  });

  const handleRoomTypeChange = (event) => {
    setRoomtype({
      ...roomtype,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setRoomtype({
      ...roomtype,
      imglink: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append('roomname', roomtype.roomname);
    formData.append('roomcount', roomtype.roomcount);
    formData.append('rate', roomtype.rate);
    formData.append('imglink', roomtype.imglink);

    // Send the form data to the server
    axios.post('http://localhost:4000/insertbookingmodel', formData)
      .then((res) => {
        alert('Success');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Form</h2>
      Room Name:
      <select
        style={{ width: '50%' }}
        value={roomtype.roomname}
        onChange={handleRoomTypeChange}
        name="roomname"
      >
        <option value="Non AC Double">Non AC Double</option>
        <option value="Duluxe double bed AC">Duluxe double bed AC</option>
        <option value="Duluxe Triple bed AC">Duluxe Triple bed AC</option>
        <option value="Duluxe Quadruple bed AC">Duluxe Quadruple bed AC</option>
      </select>
      <br />
      <br />
      <input
        style={{ width: '50%' }}
        placeholder="ROOMCOUNT:"
        name="roomcount"
        value={roomtype.roomcount}
        onChange={handleRoomTypeChange}
        type="text"
      />
      <br />
      <br />
      {/* File input for image upload */}
      <input
        style={{ width: '50%' }}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <br />
      <br />
      <input
        style={{ width: '50%' }}
        placeholder="ROOM RATE:"
        name="rate"
        value={roomtype.rate}
        onChange={handleRoomTypeChange}
        type="number"
      />
      <br />
      <br />
      <button type="submit" className="submit1">
        Submit
      </button>
    </form>
  );
}
