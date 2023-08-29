<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import Header from '$comps/header.svelte';
    import Circle from '$comps/circles.svelte';
    import Square from '$comps/squares.svelte';
    $: lang = $page.params.lang || 'en';
    $: content = lang in allContent ? allContent[lang] : allContent.en;
    let cardHover = 99;
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>
<svelte:body on:click={(e) => handleBodyClick(e)} />
    
<main class="content">
<Header {content} />
    <div class="circles" style="background-image: url('{base}/map-bg.jpg');">
        {#each allContent.tiles as circe, idx}
            <Circle bind:cardHover {circe} {idx} />
        {/each}
    </div>
    <div class="tiles">
        {#each allContent.tiles as tile, idx}
            <Square bind:cardHover {tile} {idx} />
        {/each}
    </div>
</main>
<style>
    .content {
        /* position: relative; */
        height:100vh; 
        /* max-height: calc(100vh - 75px); */
        top:0;
        /* position: fixed; */
        bottom: 0;
        left: 0;
        right: 0;

        /* background-repeat: no-repeat; */
        /* margin-top: 75px; */
        display: flex;
        flex-direction: column;
    }
    .circles {
        flex: 1;
        /* background: url('https://collections.newberry.org/IIIF3/Image/2KXJ8ZSFBTPJ9/350,250,1450,1050/max/0/default.jpg'); */
        /* background: url('map-bg.jpg'); */
        background-position: bottom left;
        background-size: 100vw auto;

    }
    .tiles {
        /* flex-basis: 350px; */
        height: 350px;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex-wrap: no-wrap;
        /* display: grid; */
        /* grid-template-columns: repeat(5, 1fr); */
        /* grid-template-rows: 1fr; */
        /* grid-column-gap: 0px; */
        /* grid-row-gap: 0px;  */
            background: rgb(var(--bg-color-2));
    }
</style>	
