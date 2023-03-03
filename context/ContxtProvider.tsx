import Cart from 'pages/cart';
import React, { createContext, ReactNode, useState } from 'react'



interface Props {
  children: ReactNode;
}
export const CartContext = createContext({});

export const ContxtProvider = ({children}:Props) => {
  const [cartProduct, setCartProduct] = useState<any>([])
  const cart = {cartProduct, setCartProduct}
  return <CartContext.Provider value={{cartProduct, setCartProduct}}>{children}</CartContext.Provider>
}
