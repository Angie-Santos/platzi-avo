/* eslint-disable @next/next/no-img-element */
import { CartContext } from "context/ContxtProvider";
import Link from "next/link";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CartProduct = ({ elemProduct }: any) => {
  const { cartProduct, setCartProduct } = useContext<any>(CartContext);
  const handleDeleteButton = () => {
    MySwal.fire({
      title: "¿Deseas eliminar un producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado con éxito!");
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
      }
    });
  };

  return (
    <div id="container">
      <img src={elemProduct.product.image} alt='avocado'/>
      <div id="text">
        <Link href={`products/${elemProduct.product.id}`}>
          {" "}
          <span id="name">{elemProduct.product.name}</span>
        </Link>
        <p>
          <span>$</span>
          {elemProduct.product.price}
        </p>
        <p>
          <span>Und: </span>
          {elemProduct.input}
        </p>
      </div>
      <button onClick={handleDeleteButton}>🗑️</button>

      <style jsx>{`
        #container {
          gap: 1rem;
          padding: 1rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        img {
          width: 30%;
        }
        #text {
          width: 50%;
          padding-top: 3rem;
          align-items: flex-start;
          font-size: 1.4rem;
        }

        #name {
          font-size: 1.7rem;
          color: black;
        }

        span {
          font-weight: 600;
        }

        button {
          cursor: pointer;
          align-items: flex-end;
          border: none;
          background-color: transparent;
        }

        @media (max-width: 1000px) {
          #container {
            width: 80%;
            gap: 0;
            margin-bottom: 2rem;
            border: 0.1rem lightgray solid;
            border-radius: 10px;
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
    </div>
  );
};

export default CartProduct;
