import { writable } from "svelte/store";

let storedLang;
if (typeof window !== "undefined") {
  storedLang = window.localStorage.getItem("language");
}
export const lang = writable(storedLang || "en");
lang.subscribe((value) => {
  if (typeof window !== "undefined")
    window.localStorage.setItem("language", value);
});
