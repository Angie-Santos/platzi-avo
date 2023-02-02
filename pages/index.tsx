import { useEffect, useState } from "react";
import Card from "@components/Card";
import Link from "next/link";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Platzi</h1> 🥑 <h1>Avo</h1>
      {productList.map((product) => (
        <Link href={`/products/${product.id}`}>
          <Card 
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image}
          />
        </Link>

      ))}
    </>
  );
};

export default Home;
