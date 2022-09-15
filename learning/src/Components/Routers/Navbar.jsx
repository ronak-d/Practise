import React from 'react'
import { Link } from 'react-router-dom'
import styles from './route.module.css'


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
    <div className={styles.navcss}>

      <Link to='/'>Routes Info </Link>
      <Link to='/Homey'>Homey </Link>
      <Link to='/About'>About</Link>
      <Link to='/UsersList'>Users</Link>

    </div>
    </>
  )
}

export default Navbar

// IMP.
// link to and routing path has to be same then only it will trigger that route element.