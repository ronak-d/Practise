import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Home from './Home'
import RoutesDemo from './Route';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" elements={<RoutesDemo/>}/>
        <Route path="/About" elements={<About/>}/>
        <Route path="/Home" elements={<Home/>}/>
    </Routes>
  )
}

export default AllRoutes


// Routes is a wrapper where each route has to be defined. 
// path = triggers element 
// element + Each Route has to be closed before.