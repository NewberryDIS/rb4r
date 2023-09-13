<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import Header from '$comps/header.svelte';
    import Circle from '$comps/circles.svelte';
    import Square from '$comps/squares.svelte';
    import {height, width, vari} from '$lib'
    $: lang = $page.params.lang || 'en';
    $: content =  allContent[lang] 
    // $: content = lang in allContent ? allContent[lang] : allContent.en;
    let cardHover = 99;
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>

<main class=" content">
    <Header {content} />
    <div class="tiles">
        {#each allContent.tiles as tile, idx}
            <Square bind:cardHover {tile} {idx} />
        {/each}
    </div>
    <div class="circles" id="map" style="flex-basis: {Math.max($width * 0.6, $height * 0.5)}px;">
    <!-- <div class="circles" id="map" style="background-image: url('{base}/lbl-map-bg-cr.png'); flex-basis: {Math.max($width * 0.6, $height * 0.5)}px;"> -->
        <div class="banner-wrapper" style="">
            <div class="banner">
                <div  class="banner-toptext">{content.hero.header}</div>
                <div class="{!$vari ? 'hide' : ''} banner-bottomtext">{@html content.hero.subtitle}</div>
            </div>
        </div>
        <!-- {#each allContent.tiles as circe, idx} -->
        <!--     <Circle bind:cardHover {circe} {idx} /> -->
        <!-- {/each} -->
    </div>
</main>
<style>
    @media screen and (min-width: 1000px){
        .tiles {

            max-height: 350px;
            /* height: min(50vh, 350px); */
            /* flex: 0 1 auto; */
            justify-content: stretch;
            align-items: stretch;
            flex-wrap: no-wrap;
        }
        .circles {

            flex: 1;
        }
        .banner {
            padding: 16px 32px 16px 16px;
            width: 37vw;
        }
        .banner-wrapper {
            /* padding-top: 75px; */
            --ban-dist: 40vw;
            background:  linear-gradient(
                var(--angle),
                rgb(var(--rb4r-green)) 0vw,
                var(--ban-dist),
                rgb(0,0,0,0) var(--ban-dist) 100vw
                );
            background-position: fixed;
        }
    }
    @media screen and (max-width: 999px){
        .tiles {
            flex: 1;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
        }
        .banner-wrapper {
            background: rgba(0,0,0,0);
        }
        .banner {
            width: 90vw;
            margin: auto;
            background: rgb(var(--rb4r-green));
            padding: 32px;
        }
    }
    @media screen and (min-width: 700px) and  (max-width: 999px){
        .banner-wrapper {
            padding-top: 32px;
        }
    }
    @media screen and (max-width: 699px){
        .banner-wrapper {
            padding-top: 32px;
        }
    }
    .tiles {
        display: flex;
        padding-top: 75px;
    }
    .banner-wrapper {
        width: 100%;
            /* position: fixed; */
            /* bottom: 25px; */
    }
    .banner-toptext {
        font-size: 24px;
    }

    .banner-bottomtext {
        font-size: 18px;
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
</style>	
