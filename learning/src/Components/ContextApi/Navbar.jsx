import React from 'react'
import Cart from './Cart'
import {useContext} from 'react'
import {CartContext} from './MainContext/CartContext'

const Navbar = () => {

const {cartvalue} = useContext(CartContext)

  return (
    <div>
        Cart : {cartvalue}
        <Cart />
    </div>
  )
}

export default Navbar