/* eslint-disable @next/next/no-img-element */
import React from "react";

const avoFacts = [
  {
    title: "Most avocados come from Mexico",
    content:
      "While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.",
  },
  {
    title: "The conquistadors were huge fans.",
    content:
      "Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ",
  },
  {
    title: "“Avocado” wasn’t its original name.",
    content:
      "Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”",
  },
  {
    title: "It’s actually a fruit.",
    content:
      "Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.",
  },
  {
    title: "There’s a secret trick to ripening them up quick",
    content:
      "Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.",
  },
];

const AboutPage = () => {
  return (
    <>
      <section>
        <h1>13 Surprising Facts About Avocados</h1>
        <figure>
          <img src="/images/avocados.jpg" alt="Avocados on a table" />
          <figcaption>
            Originally from{" "}
            <a
              target="_blank"
              href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/"
            >
              Taste of Home
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>
      <style jsx>{`
        section {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        h1 {
          text-align: center;
          font-size:3rem;
          margin: 3rem 0;
        }
        figure,
        ol {
          padding: 0;
          margin: 0;
        }
        figure {
          margin: 2rem auto 3rem;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }

        img {
          width:60%;
          min-width:300px;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }
        ol {
          width: 90%;
          display:flex;
          flex-direction:row;
          flex-wrap: wrap;
          align-items:flex-start;
          justify-content:center;
          gap:5rem;
          list-style:none;
        }
        li {
          width:42%;
          min-width:300px;
          font-size:1.8rem;
        }
        h3:first-child {
         
          margin-bottom: 2rem;
          font-size:2.5rem;
        }

        @media (min-width:1000px){
          ol{
            width:60%;
          }
        }
      `}</style>
    </>
  );
};
export default AboutPage;
