import React from "react";

const Cart = () => {
  return (
    <>
      {product && (
        <section>
          <p>Your cart is empty</p>
          <p>
            You will need to add some items to the cart before you can checkout.
          </p>
        </section>
      )}
      <section>
        <p>Subtotal {0} </p>
        <button>Check out</button>
      </section>
    </>
  );
};

export default Cart;
