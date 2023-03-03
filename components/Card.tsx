/* eslint-disable @next/next/no-img-element */
import React from "react";

type Product = {
  productName: string;
  productPrice: number;
  productImage: string;
};

const Card = ({ productName, productPrice, productImage }: Product) => {
  return (
    <section className="product">
      <img className='avo-image' src={productImage} alt="avo" />
      <p className="product-title">{productName}</p>
      <p className="product-price">Price: <span className="product-price--value">${productPrice}</span></p>

      <style jsx>{
        `
          .product {
            border: lightgray solid 0.5px;
            margin: 0 3rem;
            padding: 2rem;
            border-radius:2rem;
          }

          .product-title {
            padding:1rem;
            color:black;
            font-size: 1.7rem;
            font-weight: 600;
          }

          .avo-image {
            width:100%;
          }

          .product-price{
            color: rgb(50, 96, 58);
            font-size: 1.4rem;
            font-weight: 600;
          }

          .product-price--value {
            
            color:black;
          }

          .product:hover {
            width:81%;
            transition: width 2s, height 4s;
            box-shadow: 0 0 3px rgba(1,1,1,0.2)
          }
        `
      }</style>
    </section>
  );
};

export default Card;
