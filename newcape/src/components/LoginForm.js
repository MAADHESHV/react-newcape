import React,{useState}from 'react'
import './Form.css'
import './Submit'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'


export default function LoginForm() {
  const [login,setLogin]=useState({
    name:'',
    pswd:''
  })
const navigate=useNavigate()

  const loginuser = (e) => {
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('http://localhost:4000/login',login
    ,{
      headers: headers
  })
    
      .then(res => {
        alert(res.data[0].role)
        if(res.data[0].role==="admin"){
          navigate('/admin')
        }
        else if(res.data[0].role==="admin1"){
          navigate('/roomtype')
        }
        else if(res.data[0].role==="admin2"){
          navigate('/adminrooms')
        }
        else{
          navigate('/Form')
        }
      }).catch(err => {
        alert(err)
      })

  }
  const updateField = e => {

    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };
 
  return (<>
  <br />
    <h1>BOOKING FORM</h1>
    <br />
    <div className="form">
      <form onSubmit={loginuser}>

        <input style={{ width: "500px", marginBottom: "3px" }} type="text" className='name' name='name'    value={login.name} onChange={(e) => updateField(e)} placeholder="NAME"/> <br /><br />
<input style={{ width: "500px", marginBottom: "3px" }} type="password" className='pswd'  value={login.pswd} name='pswd'  onChange={(e) => updateField(e)} placeholder="PASSWORD"/>
<br /><br />
        <button style={{ width: "200px", marginLeft: "150px" }} className='submit1' type="submit">SUBMIT</button>

      </form>
     <p>NEWUSER:<Link to='/register'>REGISTER</Link> </p></div>
  </>
  )
}
