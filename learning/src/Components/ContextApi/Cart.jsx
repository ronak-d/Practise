import React from 'react'
import {CartContext} from './MainContext/CartContext';
import {useContext} from 'react';

const Cart = () => {

  const {handleChange} = useContext(CartContext)

  return (
    <div style={{
    color: 'white',
    fontSize:'30px',
    backgroundColor: 'yellow',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px'
    }}>
      <button onClick={()=>handleChange(1)}>Add to Cart</button>
    </div>
  )
}

export default Cart;