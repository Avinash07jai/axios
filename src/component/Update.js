import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Update = () => {
  const [id,setId] = useState (0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const editnavigate = useNavigate();

  useEffect (() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://638322121ada9475c8f893ea.mockapi.io/example/${id}` , {
      name : name,
      email : email,
    }).then(() => {
      editnavigate('/read');
    });
  };

  return (
          <>
              <h1> Edit</h1>
              <form>
                  Name : <input type='text' value={name}
                  onChange={(e) => setName(e.target.value)} 
                  /> <br /> <br />
                  Email : <input type='email' value={email}
                   onChange={(e) => setEmail(e.target.value)}
                    /> <br /> <br />
                  <button type='submit'
                   onClick={handleUpdate}
                   >Edit</button>
              </form>
          </>
  )
}

export default Update;
