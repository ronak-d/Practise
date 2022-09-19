import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Homey from './Home'
import AppRoutes from './AppRoute';
import Navbar from './Navbar';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import Login from './Login';

const AllRoutes = () => {

  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<AppRoutes/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Homey" element={<Homey/>}/>
        <Route path="/UsersList" element={<UsersList/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/UsersList/:mail/:first_name" element={<UserDetails/>}/>
    </Routes>;
    {/* use :mail/:id for dynamic routing */}
    </>
  )
}

export default AllRoutes;
// Routes is a wrapper where each route has to be defined. 
// path = triggers element 
// element + Each Route has to be closed before


// be very careull in the type error if typed (component or elements) causing error =>Matched leaf route at location "/" does not have an element. This means it will render an with a null value by default resulting in an "empty" page


{/* <Route path="/UsersList/id" element={<UserDetails/>}/>  */} 
// if i give any param after {Userlist} it has to trigger element of {UserDetails}

// IMP.
// always use [ : ] for dynamic routing (routing inside routig concepts).
