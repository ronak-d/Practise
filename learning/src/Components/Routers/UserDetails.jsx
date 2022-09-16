import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {mail} = useParams();
  return (
    <>
    <div>UserDetails</div>
    <h1>hello</h1>
    </>
  )
}

export default UserDetails



// we can here use UseParams hook for anything passed inside the path param
// will passed as prop and we can use them as a prop.