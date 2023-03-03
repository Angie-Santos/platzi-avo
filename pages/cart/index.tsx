import CartProduct from "@components/CartProduct";
import Modal from "@components/Modal";
import { CartContext } from "context/ContxtProvider";
import React, { useContext, useState } from "react";

const Cart = () => {
  const { cartProduct } = useContext<any>(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="main">
        <section id="cart">
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
          <section id="empty">
            <h4>Your cart is empty</h4>
            <p>
              You will need to add some items to the cart before you can
              checkout.
            </p>
          </section>
        )}
        <section id="total">
          <p>
            <span>Total: </span>$
            {cartProduct
              .reduce(
                (acc: any, act: any) =>
                  acc + parseInt(act?.input) * act.product.price,
                0
              )
              .toFixed(2)}{" "}
          </p>
          <button
            disabled={
              cartProduct.reduce(
                (acc: any, act: any) =>
                  acc + parseInt(act?.input) * act.product.price,
                0
              ) === 0
                ? true
                : false
            }
            onClick={handleOpenModal}
          >
            Check out
          </button>
        </section>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>El proceso de compra ha sido completado!*</h2>
          <p>* La compra es ficticia</p>
        </Modal>
      </section>

      <style jsx>{`
        #main {
          height: 100%;
          width: 100%;
          display: flex;
          padding-top: 3rem;
          flex-direction: column;
          align-items: center;
          margin-bottom:5rem;
        }
        h2 {
          text-align: center;
          font-size: 2.1rem;
          color: rgb(50, 96, 58);
        }

        #total {
          border: 0.1rem lightgray solid;
          padding: 2rem;
          border-radius: 0.5rem;
          display: flex;
          width: 35%;
          justify-content: space-between;
          align-items: center;
        }

        #empty {
          border: 0.1px #ffeee9 solid;
          padding: 2rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          font-size: 1.6rem;
          text-align: center;
          background-color: #fffaf3;
          width: 35%;
          justify-content: space-between;
          align-items: center;
          color: #573a08;
          margin-bottom: 2rem;
        }
        h4 {
        }

        #total p {
          font-size: 1.6rem;
          font-weight: 600;
        }

        span {
          color: rgb(50, 96, 58);
        }

        button {
          background-color: rgb(33, 186, 69);
          color: white;
          font-weight: 700;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        button:hover {
          background-color: rgb(20, 160, 80);
          color: white;
          font-weight: 700;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        button:disabled {
          background-color: gray;
          cursor: default;
        }
        @media (max-width: 1000px) {
          #cart {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          #empty {
            width: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          #total {
            width: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          #text {
            padding-top: 0;
            width: 80%;
          }
          p {
            margin: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Cart;
