import React, { useState } from 'react'
import {createContext} from 'react';
import CApi from '../CApi';

// maintaining the context function for the cart.
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartvalue, setcartvalue] = useState(0);

  function handleChange(inc){
    setcartvalue(cartvalue+inc);
  }

  console.log(children)
  return (
    <CartContext.Provider value={{cartvalue, handleChange }} >  
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;


// import the createcontext from the react; => it will maintain a block for you;
// to link between them 1st we need to join this block of context to all the components.

// just good practise => Use provider after the name.
// Consumner => takes the value form the components
// Provider  => Provides the value to the components.

// CartContext.Provider => provides th e value and can have a Single prop which can contain any kind of value.
// CartContext.Provider is a react component comes from -> createContext

// children has to be static with no spell or case mistakes in it.



{/* <CartContext.Provider value={0}>  // we can only pass single prop.
{children}                            // we are rendering children.
</CartContext.Provider> */}

// value={{cartvalue, handleChange }}   -> destructure in object imp pass an single prop only.