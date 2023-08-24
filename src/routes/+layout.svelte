<script>
    import {page} from '$app/stores' 
    import { browser } from '$app/environment';
    import { onMount } from "svelte";
    import { lang } from '$lib/stores'
    // $: console.log($page.url.pathname)
    if (browser){
    if($page.url.pathname === '/es' || [$lang, $page.params.lang].includes( 'es' )){
        console.log(window.localStorage.getItem("language"))

        window.localStorage.setItem("language", "es") || 'es'
    } 
        $lang = window.localStorage.getItem("language") || $page.params.lang || 'en' 

    };
</script>
<slot />
