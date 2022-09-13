import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div style={{display: 'flex', padding: '20px',border: '1px solid black'}}>
        <Link to='/'>Routes Info </Link>
        <Link to='/home'>Home </Link>
        <Link to='/about'>About</Link>
    </div>
    </>
  )
}

export default Navbar