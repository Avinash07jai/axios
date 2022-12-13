import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
   const [data,setData] = useState([]);

   function getDate (){
       axios.get("https://638322121ada9475c8f893ea.mockapi.io/example")
       .then((res) => {
        console.log(res);
        setData(res.data);
       });
   }

    function handleDelete(id){
        axios.delete(`https://638322121ada9475c8f893ea.mockapi.io/example/${id}`)
        .then(() => {
            getDate();
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem('id' , id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

    }

   useEffect (() => {
      getDate();
   },[]);
  return (
    <>
     <h1>Read operations</h1>
     <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th></th>
                      <th></th>
            </tr>
        </thead>
        { data.map((eachData) => {
            return (
                <>
                    <tbody>
                        <tr>
                            <th>{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <Link to="/update">
                            <td> <button style={{color:'blue'}} onClick={() => setToLocalStorage (eachData.id, eachData.name, eachData.email)} >Edit </button></td>
                            </Link>
                            <td>
                                <button style={{color:'red'}} 
                                onClick={() => handleDelete (eachData.id)}
                                > Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </>
            )
        } )}
     </table>
    </>
  )
}

export default Read;
