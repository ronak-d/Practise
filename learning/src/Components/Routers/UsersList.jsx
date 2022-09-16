import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './route.module.css'
import { Link } from 'react-router-dom';

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
    <div className={styles.userlist}>
      <h3>UsersList</h3>

      {users.map((user) =>(
        <>
          <Link to={`/UsersList/${user.email}/${user.id}`}>
            <img src={user.avatar} alt="" />
            <p key={user.id}> {user.id} {user.first_name} {user.last_name}</p>
          </Link>
        </>
      ))}
    </div>
  )
}

export default UsersList


// call users from reqres users.
// https://reqres.in/api/users


// use => () curly brackets for sure in mapping to avoid errors.