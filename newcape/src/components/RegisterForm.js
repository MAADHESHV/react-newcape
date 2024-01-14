import React, { useState } from 'react'
import './Form.css'
import './Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function RegisterForm() {
  const [register,setRegister]=useState({
    name:'',
    address:'',
    cnum:'',
    pswd:''
  }
  )



  const navigate = useNavigate()

  const registeruser = (e) => {
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('http://localhost:4000/register',register
    ,{
      headers: headers
  })
    
      .then(res => {
        // alert(res.data)
        if(res.data[3]==="admin"){
          navigate('/admin')
        }
       
        else{
          navigate('/user')
        }
      }).catch(err => {
        alert(err)
      })

  }
  const updateField = e => {

    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };
  return (<>
  <br />
    <h1>BOOKING FORM</h1>
    <div className="form">
      <form onSubmit={registeruser}>

        <input style={{ width: "500px", marginBottom: "3px" }} type="text" className='name' name='name' onChange={(e) => updateField(e)}  value={register.name} placeholder="NAME" />

        <input style={{ width: "500px", marginBottom: "3px" }} type="text" className='address' name='address' onChange={(e) => updateField(e)}   value={register.address}placeholder="ADDRESS" />
        <input style={{ width: "500px", marginBottom: "3px" }} type="number" className='cnum' name='cnum' onChange={(e) => updateField(e)}   value={register.cnum} placeholder="PHONE NUMBER" />

        <input style={{ width: "500px", marginBottom: "3px" }} type="password" className='pswd' name='pswd' onChange={(e) => updateField(e)}   value={register.pswd} placeholder="PASSWORD"/>

 <br /> <br />



        <button style={{ width: "200px", marginLeft: "150px" }} className='submit1' type="submit">SUBMIT</button>
      </form></div>
  </>
  )
}
