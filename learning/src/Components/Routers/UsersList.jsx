import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then((response) => setUsers(response.data.data))
    .catch((error) => console.error(error));
  },[]);
  
  console.log(users);
  return (
    <>
      <h3>UsersList</h3>
      
      {users.map((user) =>{
        <p> {users.id}. {users.first_name}</p>
      })}
    </>
  )
}

export default UsersList


// call users from reqres users.
// https://reqres.in/api/users