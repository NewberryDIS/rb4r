/** @type {import('./$types').PageLoad} */
import { base } from "$app/paths";
export async function load({ fetch, params }) {
  const lang = params.lang ? params.lang : "en";
  console.log(params.lang || "en");
  const res = await fetch(`${base}/api/storymap?lang=${lang}&id=${params.id}`);
  // console.log(`/api/atorymap?lang=${lang}&id=${params.id}`);
  const jsonFetchData = await res.json();
  return { storymapJson: jsonFetchData.storymap };
}

// import allContent from "$lib/content.json";
//
// function getStorymapsByCountry(storymaps) {
//   const results = {};
//   for (const storymap of storymaps) {
//     const country = storymap.en.country.toLowerCase();
//     if (!results[country]) {
//       results[country] = [];
//     }
//     results[country].push(
//       storymap.en.storymap.replace("/index.html", "/published.json"),
//       storymap.es.storymap.replace("/index.html", "/published.json")
//     );
//   }
//   return results;
// }
//
// const countryUrlPairs = getStorymapsByCountry(allContent.tiles);
//
// export async function load({ params }) {
//   const id = params.id;
//   const lang = params.lang && params.lang === "es" ? 1 : 0;
//   console.log(countryUrlPairs[id][lang]);
//
//   const response = await fetch(countryUrlPairs[id][lang]);
//   const jsonFetchData = await response.json();
//
//   return {
//     storymapJson: jsonFetchData.storymap,
//   };
// }
