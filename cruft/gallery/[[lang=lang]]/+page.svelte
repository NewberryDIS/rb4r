<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import Header from '$comps/gal-header.svelte';
    import Circle from '$comps/circles.svelte';
    // import Circle from '$comps/gal-circles.svelte';
    import Square from '$comps/gal-squares.svelte';
    $: lang = $page.params.lang || 'en';
    $: content =  allContent[lang] ;
    let cardHover = 99;
    const gallery = true
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>

<main class="content">
<Header {content} {gallery} />
    <div class="circles" style="background-image: url('{base}/map-bg.jpg');">
        {#each allContent.tiles as circe, idx}
            <Circle bind:cardHover {circe} {idx} />
        {/each}
    </div>
    <div class="tiles">
        {#each allContent.tiles as tile, idx}
            <Square bind:cardHover {gallery} {tile} {idx} />
        {/each}
    </div>
</main>
<style>
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

        flex: 1;
        background-position: bottom left;
        background-size: 100vw auto;
        flex-direction: column;
        position: relative;

    }
    .tiles {
        height: 350px;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex-wrap: no-wrap;
        background: rgb(var(--bg-color-2));
    }
</style>	
