import allContent from "$lib/content.json";

function getStorymapsByCountry(storymaps) {
  const results = {};
  for (const storymap of storymaps) {
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

const countryUrlPairs = getStorymapsByCountry(allContent.tiles);

export async function load({ params }) {
  const id = params.id;
  console.log(countryUrlPairs[id].en);

  const response = await fetch(countryUrlPairs[id].en);
  const jsonFetchData = await response.json();

  return {
    storymapJson: jsonFetchData.storymap,
  };
}
