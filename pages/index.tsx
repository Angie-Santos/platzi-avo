import { useEffect, useState } from "react";
import Navbar from "@components/Navbar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Platzi</h1> 🥑 <h1>Avo</h1>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </>
  );
};

export default Home;
