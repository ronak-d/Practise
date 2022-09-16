import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(({data}) =>{
      console.log(data.data);
      setUsers(data.data)
    })
    .catch((error) => console.error(error));
  },[]);
  
  return (
    <>
      <h3>UsersList</h3>
      {users.map((user) =>(
        <p key={user.id}> {user.id} {user.first_name} {user.last_name}</p>
      ))}
    </>
  )
}

export default UsersList


// call users from reqres users.
// https://reqres.in/api/users