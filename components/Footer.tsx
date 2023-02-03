import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="container-section">
          <div className="section">
            <p>Nosotros</p>
            <ul>
              <li>Conoce más</li>
            </ul>
          </div>
          <div className="section">
            <p>Servicios</p>
            <ul>
              <li>Todos los productos</li>
            </ul>
          </div>
          <div className="section">
            <p>Hecho para</p>
            <ul>
              <li>Platzi y su curso de NextJS </li>
            </ul>
          </div>
        </div>
        <p>
          Icons made by Freepik from www.flaticon.com Avocado images taken from
        </p>
        <p>Avocado 101 at California Avocado</p>
      </footer>
      <style jsx>{`
        footer {
          margin-top: 6rem;
          padding-bottom:3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        #container-section {
          display: flex;
          gap:5rem;
        }

        .section {
          display: flex;
          flex-direction: column;
        }
        
        ul{
          list-style:none;
        }
      `}</style>
    </>
  );
};

export default Footer;
