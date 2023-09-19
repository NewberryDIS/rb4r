import allContent from "$lib/content.json";
// import { json } from "@sveltejs/kit";
const nuklUrl =
  "https://uploads.knightlab.com/storymapjs/f16f101e1b9e4f19898b53b294e8d1dd/";
function getStoryMapUrls() {
  const results = {};
  for (const storymap of allContent.tiles) {
    const country = storymap.en.country.toLowerCase();
    if (!results[country]) {
      results[country] = [];
    }
    results[country].push(
      nuklUrl + storymap.en.storymap.web + "/published.json",
      nuklUrl + storymap.es.storymap.web + "/published.json"
    );
  }
  return results;
}

export async function load({ params }) {
  // const id = url.searchParams.get("id");
  // const lang = url.searchParams.get("lang") === "es" ? 1 : 0;
  const id = params.id;
  const lang = params.lang === "es" ? 1 : 0;
  const storymapUrls = getStoryMapUrls();
  const smUrl = storymapUrls[id][lang];

  // console.log(smUrl);

  const response = await fetch(smUrl);
  const jsonFetchData = await response.json();
  return { storymapJson: jsonFetchData.storymap };
}
