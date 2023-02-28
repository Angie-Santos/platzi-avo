import { CartContext } from "context/ContxtProvider";
import React, { useContext } from "react";

const CartProduct = ({ elemProduct }: any) => {
  const { cartProduct, setCartProduct } = useContext<any>(CartContext);
  const handleDeleteButton = () => {

    const updateProduct = {
      ...elemProduct,
      input: parseInt(elemProduct.input) -1
    };
    setCartProduct(
      cartProduct.map((element: any) =>
        element.product.name === elemProduct?.product.name
          ? updateProduct
          : element
      )
    );
    console.log(cartProduct);
  };

  return (
    <div>
      <img src={elemProduct.product.image} />
      <div>
        <p>Name: {elemProduct.product.name}</p>
        <p>Price: {elemProduct.product.price}</p>
        <p>und: {elemProduct.input}</p>
      </div>
      <button onClick={handleDeleteButton}>🗑️</button>

      <style jsx>{`
        img {
          width: 10%;
        }
      `}</style>
    </div>
  );
};

export default CartProduct;
