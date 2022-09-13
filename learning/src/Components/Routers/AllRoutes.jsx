import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Homey from './Home'
import AppRoutes from './AppRoute';
import Navbar from './Navbar';

const AllRoutes = () => {

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<AppRoutes/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Homey" element={<Homey/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes;


// Routes is a wrapper where each route has to be defined. 
// path = triggers element 
// element + Each Route has to be closed before


// be very careull in the type error if typed (component or elements) causing error =>Matched leaf route at location "/" does not have an element. This means it will render an with a null value by default resulting in an "empty" page
