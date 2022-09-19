import React from 'react'

const Login = () => {
  return (
    <>
        <h3>User Login to view user's details </h3>
        <br />
        <input type="email"  placeholder="email"/>
        <input type="password" placeholder="password"/>
    </>
  )
}

export default Login;


// using reqres.in user email and password.
// POST Request
// /api/login

// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }