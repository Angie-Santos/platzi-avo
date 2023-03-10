/* eslint-disable @next/next/no-img-element */
import { CartContext } from "context/ContxtProvider";
import Link from "next/link";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const { cartProduct, setCartProduct } = useContext<any>(CartContext);
  return (
    <>
      <nav id="principal-header">
        <ul>
          <li>
            <Link id="navbar" href="/">
              <img className="logo" src="/images/avocado-icon.png" alt="logo" />
              Avo Store
            </Link>
          </li>
          <li>
            <Link id="cart" href="/cart">
              <span>
                <span id="basket">🧺</span>
                {cartProduct.reduce(
                  (prev: any, curr: any) =>
                    parseInt(prev) + parseInt(curr.input),
                  0
                )}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          width: 100%;
          justify-content: space-between;
          list-style: none;
          align-items: center;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          margin-right: 3rem;
          color: rgb(50, 96, 58);
          font-size: 1.4rem;
          font-weight: 700;
          background-color: white;
          padding: 0.3rem 1rem;
          border-radius: 5rem;
        }

        #basket {
          margin: 0;
          padding: 0 1rem 0 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;
