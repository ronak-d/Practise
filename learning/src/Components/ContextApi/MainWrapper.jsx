import React from 'react'
import CApi from './CApi';
import CartContextProvider from './MainContext/CartContext';

const MainWrapper = () => {
  return (
    <>
    <CartContextProvider>
        <CApi />
    </CartContextProvider>
    </>
  )
}

export default MainWrapper; 