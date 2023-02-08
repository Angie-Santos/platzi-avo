import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductIdDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  // const {query : {productId}} = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);
  return (
    <section>
      <div id="container">
        {product && (
          <>
            <img src={product?.image} alt="avocado" />
            <div id="container_info">
              <h2>{product?.name}</h2>
              <p id="price">Price: {product?.price}</p>
              <p id="sku">SKU: {product?.sku}</p>
              <form id="input">
                <input type="number" name="" id="" min={1} max={10} required/>
                <button type="submit">Add to cart</button>
              </form>
            </div>
          </>
        )}
      </div>
      {product && (
        <div id="container_more-info">
          <h3>About this avocado</h3>
          <p>{product?.attributes.description}</p>
          <div>
            <table>
              <thead>
                <tr >
                  <th colSpan={2}>
                      Attributes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>{product?.attributes.shape}</td>
                </tr>
                <tr>
                  <td>Hardiness</td>
                  <td>{product?.attributes.hardiness}</td>
                </tr>
                <tr>
                  <td>Taste</td>
                  <td>{product?.attributes.taste}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <style jsx>{`
      section{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
      }
        #container {
          margin:2rem;
          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: center;
          height:50%;
        }

        img {
          height:100%;
        }

        #container_info {
          display: flex;
          gap:1rem;
          flex-direction: column;
          justify-content:space-evenly;
          height:50%;
        }

        h2 {
          font-size:2rem;
        }

        #price {
          color:rgb(100,100,100);
          font-size:1.4rem;
          font-weight:600;
        }

        #sku {
          background-color:rgb(200,200,200);
          color:rgb(17,17,17);
          font-size:1.2rem;
          padding: 0.5rem 2rem;
          width:fit-content;
          border-radius:0.5rem;
        }

        #input input{
          border:rgb(200,200,200) solid 0.01rem;
          padding: 1rem;
          width:100px;
          outline:none;
          border-radius:0.5rem;
          margin-right:2rem;
        }

        #input button{
          background-color:rgb(33,186,69);
          color:white;
          font-weight: 700;
          border:none;
          padding: 1rem;
          border-radius:0.5rem;
          cursor:pointer;
        }

        #input button:hover{
          background-color:rgb(20,160,80);
          color:white;
          font-weight: 700;
          border:none;
          padding: 1rem;
          border-radius:0.5rem;
          cursor:pointer;
        }

        p {
          font-size:1.6rem;
        }

        #container_more-info{
          margin: 1rem 2rem;
          line-height: 2.5rem;
        }

        h3 {
          font-size:1.9rem;
          margin-bottom:1rem;
        }
        #container_more-info div {
          display:flex;
          justify-content:center;
          padding:2rem 0;
        }
        table{
          width:100%;
          table-layout:fixed;
          font-size:1.5rem;
          border-collapse:collapse;
        }

        td, tr {
          border: #e6e6e6 0.1rem solid;
          padding:1rem;
        }

        td {
          width: 50%;
          text-align: left;
       }

       th {
        
        background-color: #e6e6e6;
        padding:1rem;
        text-align:middle;
       }


        @media(min-width: 620px){
          #container {
            flex-direction:row;
          }

          #container_info {
            gap:0;
          }

          #container_more-info {
            width:80%;
          }
          }
          @media(min-width: 1000px) {
            #container_more-info {
              width:50%;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default ProductIdDetails;
