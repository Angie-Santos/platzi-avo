import CartProduct from "@components/CartProduct";
import { CartContext } from "context/ContxtProvider";
import React, { useContext } from "react";

const Cart = () => {
  const { cartProduct, setCartProduct } = useContext<any>(CartContext);
  return (
    <>
      <section>
        {cartProduct.map((elm: any) => {
          if(elm.input > 0 ){
            return <CartProduct key={elm.product.id} elemProduct={elm}/>;
          }
        })}
      </section>
      {cartProduct.reduce(
        (prev: any, curr: any) => parseInt(prev) + parseInt(curr.input),
        0
      ) === 0 && (
        <section>
          <p>Your cart is empty</p>
          <p>
            You will need to add some items to the cart before you can checkout.
          </p>
        </section>
      )}
      <section>
        <p>Total {0} </p>
        <button>Check out</button>
      </section>
    </>
  );
};

export default Cart;