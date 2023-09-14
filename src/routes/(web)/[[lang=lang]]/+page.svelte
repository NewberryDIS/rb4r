<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import Header from '$comps/header.svelte';
    import Circle from '$comps/circles.svelte';
    import Square from '$comps/squares.svelte';
    // import Square from '$comps/rb4r_squares.svelte';
    // import Square from '$comps/square.svelte';
    import {height, width} from '$lib'
    $: lang = $page.params.lang || 'en';
    $: content =  allContent[lang] 
    // $: content = lang in allContent ? allContent[lang] : allContent.en;
    let cardHover = 99;
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>
<!-- <svelte:body on:click={(e) => handleBodyClick(e)} /> -->

<main class=" content">
    <Header {content} />
    <div class="circles" id="map" style="background-image: url('{base}/map-bg.jpg'); flex-basis: {Math.max($width * 0.72, $height * 0.5)}px;">
        <!-- <div class="banner-wrapper" style=""> -->
        <!--     <div class="banner"> -->
        <!--         <div class="banner-toptext">{content.hero.header}</div> -->
        <!--         <div class="banner-bottomtext">{@html content.hero.subtitle}</div> -->
        <!--     </div> -->
        <!-- </div> -->
        {#each allContent.tiles as circe, idx}
            <Circle bind:cardHover {circe} {idx} />
        {/each}
    </div>
    <div class="tiles">
        <!-- {#if $width < $height} -->
        <!--     {#each allContent.tiles.slice(3,5) as tile, idx} -->
        <!--         <Square bind:cardHover {tile} {idx} /> -->
        <!--     {/each} -->
        <!-- {:else} -->
        {#each allContent.tiles as tile, idx}
            <Square bind:cardHover {tile} {idx} />
        {/each}
        <!-- {/if} -->
    </div>
</main>
<style>
    @media screen and (min-width: 1000px){
        .tiles {

            height: 350px;
            flex: 0 1 auto;
            justify-content: stretch;
            align-items: stretch;
            flex-wrap: no-wrap;
        }
        .circles {

            flex: 1;
        }
    }
    @media screen and (max-width: 999px){
        .tiles {
            /* height: auto; */
            flex: 1;
            flex-wrap: wrap;
            justify-content: stretch;
            align-items: stretch;
        }
    }
    .banner-wrapper {
        width: 100%;
    }
    @media screen and (min-width: 851px){
        .banner {
            padding: 5vw 128px;
            padding: 16px;
            width: 70vw;
        }
        .banner-wrapper {
            padding-top: 75px;
            background:  linear-gradient(
                var(--angle),
                rgb(var(--rb4r-green)) 0vw,
                var(--dist),
                rgb(0,0,0,0) var(--dist) 100vw
                );
            background-position: fixed;
        }
        .banner {
        }
    }
    @media screen and (max-width: 850px){
        .banner-wrapper {
            padding-top: 90px;
            background: rgba(0,0,0,0);
        }
        .banner {
            width: 90vw;
            margin: auto;
            background: rgb(var(--rb4r-green));
            padding: 32px;
        }
    }
@media screen and (max-height: 900px) and ( max-width: 900px){
        .circles { 
            display: none !important;
        }
}
    .banner-toptext {
        font-size: 26px;
    }

    .banner-bottomtext {
        font-size: 20px;
    }
    .content {
        height:100vh; 
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        }
        .circles {
            display: flex;
            flex-direction: column;
            position: relative;
            background-position: bottom;
            background-size: 100vw auto;

        }
        .tiles {
            display: flex;
            background: rgb(var(--bg-color-2));
        }
</style>	
