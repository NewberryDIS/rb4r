import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "~/components/tile/tile";
import data from "./data.json";

// const dummydata = {
//   color: "#cccccc",
//   number: "6",
//   topText:
//     "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
//   bottomText:
//     "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
//   image: "2KXJ8ZSFBTPJ9",
// };
//
export default component$(() => {
  return (
    <>
      <header>
        <div class="header-left">
          <a
            href="https://www.newberry.org/"
            class="center nolines"
            target="_blank"
          >
            <img src="newberry-logo.png" alt="logo for the Newberry Library" />
          </a>
        </div>
        <div class="header-right">
          <div class="lang-links">
            <a href="/english">English</a>
            <a href="/spanish">Spanish</a>
          </div>
          <h1>Seeing Race Before Race</h1>
          <h2>A Closer Loo</h2>
        </div>
      </header>
      {/* main> */}
      <main>
        <div class="hero">
          <img
            height="1050"
            width="1450"
            src="https://collections.newberry.org/IIIF3/Image/2KXJ8ZSFBTPJ9/350,250,1450,1050/max/0/default.jpg"
            alt="map of the world from a perspective that looks upside down from what people are accustomed to: North is down."
          />
          <div class="hero-text">
            <h3>Explore the roots of racism from the Middle Ages to 1800</h3>
            <p>
              A companion to Seeing Race Before Race, a Newberry exhibition and
              an Arizona Center for Medieval and Renaissance Studies Press
              publication.
            </p>
          </div>
        </div>
        <div class="tiles">
          {data.map((d) => {
            return <Tile tile={d} key={d.country.toLowerCase()} />;
          })}
        </div>
      </main>
      <footer></footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
