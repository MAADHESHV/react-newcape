import React , { useState } from 'react';
import axios from 'axios'
import './Form.css'
import './Submit'
export default function Roomtype(){
const [roomtype, setroomtype] = useState({
        roomname:'',
         roomcount:'',
         imglink:'',
         rate:''
       
  })
const Roomtyped = (e) => {
        e.preventDefault()
        const headers = {
          'Content-Type': 'application/json'
        }
        axios.put('http://localhost:4000/updatebookingmodel/6459de5e364697fd9d41ccc2',roomtype
        ,{
          headers: headers
      })
      
      .then(res => {
            alert("update success")
          }).catch(err => {
            alert(err)
          })
    
      }
      const updateField = e => {
    
        setroomtype({
          ...roomtype,
          [e.target.name]: e.target.value
        });
      };

      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setroomtype({
          ...roomtype,
          imglink: file,
        });
      };


return(
    <>
    <form onSubmit={Roomtyped} >
      <br />
<h2>Admin Form</h2>


Room Name: <br />
<select style={{width:"50%"}}  value={roomtype.roomname} onChange={(e) => updateField(e)} name="roomname" id="">

    <option value="Non AC Double">Non AC Double </option>
    <option value="Duluxe double bed AC">Duluxe double bed AC</option>
    <option value="Duluxe Triple bed AC">Duluxe Triple bed AC</option>
    <option value="Duluxe Quadruple bed AC">Duluxe Quadruple bed AC</option>
</select> <br />
Room Count: <br />
<input style={{width:"50%"}} name='roomcount' value={roomtype.roomcount} onChange={(e) => updateField(e)}type="text" /> <br /> 
<br />
image:
<input
        style={{ width: '50%' }}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        name='imglink' 
        value={roomtype.imglink}
      />
Img:
<input style={{width:"50%"}} name='imglink' value={roomtype.imglink} onChange={(e) => updateField(e)}type="text" /> <br /> <br />
Rate:
<input style={{width:"50%"}} name='rate' value={roomtype.rate} onChange={(e) => updateField(e)}type="number" />
<br /> <br />
<button type='submit' className='submit1'>submit</button>

    </form>
    
    </>
)
}

