import React from 'react'
import { Link } from 'react-router-dom'


// we can do it by mapping also.
// let nav = [
//   {to:"/", title:"Routes info"},
//   {to:"/Homey", title:"Home"},
//   {to:"/About", title:"About"},
//   {to:"/Users", title:"Users"}
// ]

// {nav.map((e,i)=>{
//   <Link key={i} to={e.to}>{e.title}</Link>
// })}

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