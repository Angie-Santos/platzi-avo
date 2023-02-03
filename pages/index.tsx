import { useEffect, useState } from "react";
import Card from "@components/Card";
import Link from "next/link";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  const [counter, setCounter] = useState(0);
  const [killAvo, setKillAvo] = useState(false);

  const handleClick = () => {
    setCounter(counter + 1);
    if (counter > 2 && counter < 6) {
      setKillAvo(true);
    } else if (counter === 6) {
      setCounter(0);
      setKillAvo(false);
    }
  };

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section id="header-products">
        <h1>Platzi</h1>
        <img
          className="logo"
          src={
            killAvo
              ? "/images/avocado-death-icon.png"
              : "/images/avocado-icon.png"
          }
          alt="logo"
          onClick={handleClick}
        />
        <h1>Avo</h1>
      </section>
      <section id="container-products">
        {productList.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card
              key={product.id}
              productName={product.name}
              productPrice={product.price}
              productImage={product.image}
            />
          </Link>
        ))}
      </section>

      <style jsx>{`
        .logo {
          cursor: pointer;
        }

        .logo:active {
          position: relative;
          -webkit-animation-name: rebote;
          -webkit-animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-direction: reverse;
          animation-name: rebote;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: reverse;
          animation-timing-function: ease-out;
        }

        @keyframes rebote {
          0% {
            left: 0px;
            top: 0px;
          }
          25% {
            left: 0px;
            top: 0px;
          }
          50% {
            left: 0px;
            top: -20px;
          }
          75% {
            left: 0px;
            top: -20px;
          }
          100% {
            left: 0px;
            top: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
