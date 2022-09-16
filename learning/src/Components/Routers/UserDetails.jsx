import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {

    const {id} = useParams();

  return (
    <h3>UserDetails id:{id}</h3>
  )
}

export default UserDetails;


// useParams know what parameter is comming like id or any other things 