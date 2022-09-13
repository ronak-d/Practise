import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        <ul><Link to='/'>Routes Info </Link></ul>
        <ul><Link to='/Homey'>Homey </Link></ul>
        <ul><Link to='/About'>About</Link></ul>
    </div>
    </>
  )
}

export default Navbar