import { CartContext } from "context/ContxtProvider";
import Link from "next/link";
import React, { useContext } from "react";

const CartProduct = ({ elemProduct }: any) => {
  const { cartProduct, setCartProduct } = useContext<any>(CartContext);
  const handleDeleteButton = () => {
    const updateProduct = {
      ...elemProduct,
      input: parseInt(elemProduct.input) - 1,
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
    <div id="container">
      <img src={elemProduct.product.image} />
      <div id="text">
       <Link href={`products/${elemProduct.product.id}`}> <span id="name">{elemProduct.product.name}</span></Link>
        <p><span>$</span>{elemProduct.product.price}</p>
        <p><span>Und: </span>{elemProduct.input}</p>
      </div>
      <button onClick={handleDeleteButton}>🗑️</button>

      <style jsx>{`
        #container {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        img {
          width: 30%;
        }
        #text {
          width: 50%;
          padding-top: 3rem;
          align-items: flex-start;
          font-size:1.4rem;
        }

        #name {
          font-size: 1.7rem;
          color:black;
        }

        span {
          font-weight:600;
        }

        button {
          cursor: pointer;
          align-items: flex-end;
          border: none;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default CartProduct;
