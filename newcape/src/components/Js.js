import {useState} from 'react';
import './Form.css'

const Js = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);


  };
  const getState=()=>{

  }

  return (
    <div>
        <form>
      <input style={{ width: "500px", marginBottom: "3px" }} 
        type="number"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
<br /><br />
      <h2 style={{width:"100%"}}>Amount {1200*message}</h2>
      </form>
    </div>
  );
};

export default Js;