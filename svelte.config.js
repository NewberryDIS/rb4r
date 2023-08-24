import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      handleHttpError: "warn",
      entries: [
        "/",
        "/en",
        "/es",
        "/en/storymap",
        "/es/storymap",
        "/en/storymap/france",
        "/en/storymap/germany",
        "/en/storymap/turkey",
        "/en/storymap/mexico",
        "/en/storymap/england",
        "/es/storymap/france",
        "/es/storymap/germany",
        "/es/storymap/turkey",
        "/es/storymap/mexico",
        "/es/storymap/england",
      ],
    },
    adapter: adapter({
      runtime: "nodejs18.x",
    }),
    paths: {
      base: "/rb4r",
    },
    alias: {
      $comps: "src/lib/components/",
    },
  },
};

export default config;
