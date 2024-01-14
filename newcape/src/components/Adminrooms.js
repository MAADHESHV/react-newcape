import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';

import axios from 'axios'

export default function Adminrooms() {
    const [usersdatas, setUsersdata] = useState([]);
    const nav=()=>{
      navigate('/Update')
  
  }
  const navigate=useNavigate();
    let arr = [];
    const uservalues = () => {
        axios.get('http://localhost:4000/displaybookingmodel').then((res) => {
            arr = res.data;
            setUsersdata(arr)

        }).catch(err => {
            alert(err.msg)
        })
    }
    const deletevalues=(id)=>{
        axios.delete(`http://localhost:4000/deletebookingmodel/${id}`).then((res) => {
          alert(res.data)
           

        }).catch(err => {
            alert(err.msg)
        })
    }
    uservalues();
    useEffect(() => {
       
    },[deletevalues])
    return (
        <>
        <br />
  <h1>Room Details</h1>
  
<table class="table">
  <thead>
    <tr>
      
      <th scope="col">Room Type</th>
      <th scope="col">Available rooms</th>
      <th scope="col">Images</th>
      <th scope="col">Amount</th>
      <th scope="col">update rooms</th>
      <th scope="col">Delete rooms</th>
      
    </tr>
  </thead>
  <tbody>
  {usersdatas.map(user => (
    <>
  
                <tr>
                    <td>{user.roomname}</td>
                    
                    <td>{user.roomcount}</td>
                    <td>
      <img src={user.imglink} alt={user.roomname} style={{ maxWidth: '100px' }} />
    </td>
                    <td>{user.rate}</td>
               
{/*                     
                   <td><img src={user.imglink} alt="" /></td> */}
                <td> <button className='btn btn-danger' onClick={()=>nav()}  >Update Record</button ></td>
                    <td><button className='btn btn-danger' onClick={()=>deletevalues(user._id)} >Delete Rooms</button ></td>
                </tr>
                </>
            ))}
  </tbody>
</table>




           



        </>
    )
}