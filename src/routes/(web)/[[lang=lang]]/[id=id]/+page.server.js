import allContent from "$lib/content.json";
// import { json } from "@sveltejs/kit";

function getStoryMapUrls() {
  const results = {};
  for (const storymap of allContent.tiles) {
    const country = storymap.en.country.toLowerCase();
    if (!results[country]) {
      results[country] = [];
    }
    results[country].push(
      storymap.en.storymap.replace("/index.html", "/published.json"),
      storymap.es.storymap.replace("/index.html", "/published.json")
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

  console.log(smUrl);

  const response = await fetch(smUrl);
  const jsonFetchData = await response.json();
  return { storymapJson: jsonFetchData.storymap };
}
