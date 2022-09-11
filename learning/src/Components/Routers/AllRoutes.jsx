import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Home from './Home'
import AppRoutes from './AppRoute';
import Navbar from './Navbar';

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" elements={<AppRoutes/>}/>
        <Route path="/about" elements={<About/>}/>
        <Route path="/home" elements={<Home/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes


// Routes is a wrapper where each route has to be defined. 
// path = triggers element 
// element + Each Route has to be closed before.