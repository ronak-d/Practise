import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Homey from './Home'
import AppRoutes from './AppRoute';

const AllRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<AppRoutes/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Homey" element={<Homey/>}/>
    </Routes>
  )
}

export default AllRoutes;


// Routes is a wrapper where each route has to be defined. 
// path = triggers element 
// element + Each Route has to be closed before


// be very careull in the type error if typed 