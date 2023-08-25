import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      entries: [
        "/",
        "/es",
        "/france",
        "/germany",
        "/turkey",
        "/mexico",
        "/england",
        "/es/france",
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
