import React from "react";

type Product = {
  productName: string;
  productPrice: number;
  productImage: string;
};

const Card = ({ productName, productPrice, productImage }: Product) => {
  return (
    <section className="product">
      <p>{productName}</p>
      <img className='avo-image' src={productImage} alt="avo" />
      <p>Price: ${productPrice}</p>
    </section>
  );
};

export default Card;
