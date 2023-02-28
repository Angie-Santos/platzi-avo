import CartProduct from "@components/CartProduct";
import { CartContext } from "context/ContxtProvider";
import React, { useContext } from "react";

const Cart = () => {
  const { cartProduct } = useContext<any>(CartContext);
  return (
    <>
      <section id="main">
        <section>
          <h2>Cart</h2>
          {cartProduct.map((elm: any) => {
            if (elm.input > 0) {
              return <CartProduct key={elm.product.id} elemProduct={elm} />;
            }
          })}
          <br />
        </section>
        {cartProduct.reduce(
          (prev: any, curr: any) => parseInt(prev) + parseInt(curr.input),
          0
        ) === 0 && (
          <section>
            <p>Your cart is empty</p>
            <p>
              You will need to add some items to the cart before you can
              checkout.
            </p>
          </section>
        )}
        <section>
          <p>Total {0} </p>
          <button>Check out</button>
        </section>
      </section>

      <style jsx>{`
        #main{
          height:100%;
          width:100%;
          display:flex;
          padding-top: 3rem;
          flex-direction:column;
          align-items:center;
        }
        h2{
          text-align:center;
          font-size:2.1rem;
          color:rgb(50, 96, 58); 
        }
      `}</style>
    </>
  );
};

export default Cart;
