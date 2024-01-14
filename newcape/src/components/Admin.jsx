import React from 'react'
import { useState, useEffect } from 'react'

import Update from './Update'

import axios from 'axios'
import Button from 'react-bootstrap/esm/Button';
export default function Admin() {
    const [usersdatas, setUsersdata] = useState([]);
   
    let arr = [];
    const uservalues = () => {
        axios.get('http://localhost:4000/displaybookings').then((res) => {
            arr = res.data;
            setUsersdata(arr)

        }).catch(err => {
            alert(err.msg)
        })
    }
   
    // const updatevalues = () => {
    //     axios.put('http://localhost:4000/updatebooking').then((res) => {
    //         arr = res.data;
    //         setUsersdata(arr)

    //     }).catch(err => {
    //         alert(err.msg)
    //     })
    // }
    const deletevalues=(id)=>{
        axios.delete(`http://localhost:4000/deletebooking/${id}`).then((res) => {
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

<table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Arrival date</th>
      <th scope="col">Departure date</th>
      <th scope="col">No of children</th>
      <th scope="col">No of adults</th>
      <th scope="col">Type of room</th>
      <th scope="col">No of Rooms</th>
      <th scope="col">Payment</th>
   
      <th scope="col">Delete Records</th>
    </tr>
  </thead>
  <tbody>
  {usersdatas.map(user => (
                <tr>
                    <td>{user.name}</td>
                    <td>{String(user.adate).substring(0, 10)}</td>
                    <td>{String(user.ddate).substring(0, 10)}</td>
                    <td>{user.child}</td>
                    <td>{user.adult}</td>
                    <td>{user.roomtype}</td>
                    <td>{user.room}</td>
                    <td>{user.paid}</td>
                  
                    <td><button className='btn btn-danger' onClick={()=>deletevalues(user._id)} >Delete Record</button ></td>
                </tr>
            ))}
  </tbody>
</table>




           



        </>
    )
}