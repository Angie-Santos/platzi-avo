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
      <section id='header-products'>
        <h1>Platzi</h1> 
        <img className="logo" src="/images/avocado-icon.png" alt="logo" />
        <h1>Avo</h1>
      </section>
      <section id='container-products'>
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
      </section>
    </>
  );
};

export default Home;
