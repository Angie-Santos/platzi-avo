import Link from "next/link";
import React from "react";
import styled from 'styled-components'

const RedLink = styled.a`
   color:rgb(50, 96, 58);
  font-weight:700;;
`

const Footer = () => {
  return (
      <>
      <footer>
        <div id="container-section">
          <div className="section">
            <p className="sections">Nosotros</p>
            <ul>
              <li><Link href='/about'><RedLink>Conoce más</RedLink></Link></li>
            </ul>
          </div>
          <div className="section">
            <p className="sections">Servicios</p>
            <ul>
              <li><Link className="link" href='/'><RedLink>Todos los productos</RedLink></Link></li>
          </ul>
        </div>
        <div className="section">
          <p className="sections">Hecho para</p>
          <ul>
            <li><a target="_blank" href="https://platzi.com/cursos/next/">Curso de Platzi: NextJS</a></li>
          </ul>
        </div>
      </div>
      <p className="rights one">
        Icons made by Freepik from www.flaticon.com Avocado images taken from
      </p>
      <p className="rights">Avocado 101 at California Avocado</p>
   </footer>
   <style jsx>{`
      
        footer {
          width:100%;
          margin-top: 6rem;
          padding-bottom:3rem;
          display: flex;
          flex-wrap:wrap;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-size:1.5rem;
        }

        #container-section {
          display: flex;
          flex-direction:column;
          text-align:center;
          width:100%;
        }
        
        .section {
          display: flex;
          margin: 0 3rem;
          flex-direction: column;
          gap:1rem;
          margin-bottom:2.6rem;
        }
        
        .sections {
          font-weight:700;
        }

        ul{
          list-style:none;
        }

        a {
          color:rgb(50, 96, 58);
          font-weight:700;
        }

        .rights{
          text-align:center;
          font-size:1.3rem;
          color:gray;
          margin: 0.8rem 3rem;
        }

        .one{
          margin-top:2rem;
        }

        @media (min-width: 700px){
          #container-section {
            flex-direction:row;
            text-align:left;
            justify-content:center;
            width:100%;
          }
        }
      `}</style>
    </>
)};

export default Footer;
