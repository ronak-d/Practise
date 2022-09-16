import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const {mail,first_name} = useParams();

  // this hook is taking prop value automatically from link tag in mapping function of userlist
  // 
  
  return (
    <>
    <h1>{first_name}</h1>
    <h4>Email : {mail}</h4>
    </>
  )
}

export default UserDetails



// we can here use UseParams hook for anything passed inside the path param
// will passed as prop and we can use them as a prop.