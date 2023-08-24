import { redirect } from "@sveltejs/kit";
import { lang } from "$lib";
import { onMount } from "svelte";

export function load() {
  // Redirect to the /en/ path if the user's language preference is English.
  if (lang === "es") {
    throw redirect(308, "/es");
  } else {
    throw redirect(308, "/en");
  }
}
