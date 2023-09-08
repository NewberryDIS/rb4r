import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      entries: [
        "/",
        "/credits",
        "/backgrounds",
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
