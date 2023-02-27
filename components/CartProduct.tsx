import React from 'react'

const CartProduct = ({cartProduct}:any) => {
  return (
    <>
      <img src={cartProduct.product.image}/>
      <p>Name: {cartProduct.product.name}</p>
      <p>SKU {cartProduct.product.sku}</p>
      <p>Price: {cartProduct.product.price}</p>
      <p>und: {cartProduct.input}</p>
    </>
  

  )
}

export default CartProduct