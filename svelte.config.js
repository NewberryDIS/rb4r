import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      entries: [
        "/",
        // "/credits",
        // "/backgrounds",
        // "/es",
        // "/france",
        // "/germany",
        // "/turkey",
        // "/mexico",
        // "/england",
        // "/es/france",
        // "/es/germany",
        // "/es/turkey",
        // "/es/mexico",
        // "/es/england",
        "/gallery",
        "/gallery/credits",
        "/gallery/es",
        "/gallery/france",
        "/gallery/germany",
        "/gallery/turkey",
        "/gallery/mexico",
        "/gallery/england",
        "/gallery/es/france",
        "/gallery/es/germany",
        "/gallery/es/turkey",
        "/gallery/es/mexico",
        "/gallery/es/england",
        "/responsive",
        "/responsive/credits",
        "/responsive/es",
        "/responsive/france",
        "/responsive/germany",
        "/responsive/turkey",
        "/responsive/mexico",
        "/responsive/england",
        "/responsive/es/france",
        "/responsive/es/germany",
        "/responsive/es/turkey",
        "/responsive/es/mexico",
        "/responsive/es/england",
      ],
    },
    adapter: adapter({
      base: "/rb4r",
    }),
    paths: {
      base: "/rb4r",
    },
    alias: {
      $comps: "src/lib/components",
    },
  },
};

export default config;
