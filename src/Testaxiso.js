import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Testaxiso = () => {
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');

    const header = {" Acces-Allow" : "*"};

    const handleApi = (e) => {
        e.preventDefault();
        axios.post("https://638322121ada9475c8f893ea.mockapi.io/example", {
            name:name,
            email:email,
            header,
        })
        .then(() => {
            history('/read');
        })
        console.log("clicked");
    };
   
    const history = useNavigate();
  return (
    <>
    <h1> Log In</h1>
    <form>
          Name : <input type='text' onChange={(e) => setName(e.target.value)} /> <br/> <br/>
          Email : <input type='email' onChange={(e) => setEmail(e.target.value)} /> <br/> <br/>
    <button type='submit' onClick={handleApi}>Submit</button>
    </form>
      </>
  )
}

export default Testaxiso;
