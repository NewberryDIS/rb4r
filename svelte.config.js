import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      entries: [
        "/",
        "/credits",
        "/es",
        "/belgium",
        "/germany",
        "/turkey",
        "/mexico",
        "/england",
        "/es/belgium",
        "/es/germany",
        "/es/turkey",
        "/es/mexico",
        "/es/england",
        "/gallery",
        "/gallery/credits",
        "/gallery/es",
        "/gallery/belgium",
        "/gallery/germany",
        "/gallery/turkey",
        "/gallery/mexico",
        "/gallery/england",
        "/gallery/es/belgium",
        "/gallery/es/germany",
        "/gallery/es/turkey",
        "/gallery/es/mexico",
        "/gallery/es/england",
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
