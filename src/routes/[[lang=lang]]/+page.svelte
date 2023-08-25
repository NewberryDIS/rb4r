<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import Header from '$comps/header.svelte';
    import Circle from '$comps/circles.svelte';
    import Square from '$comps/squares.svelte';
    $: lang = $page.params.lang || 'en';
    $: content = lang in allContent ? allContent[lang] : allContent.en;
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>
<svelte:body on:click={(e) => handleBodyClick(e)} />
<Header {content} />
    
<div class="content">
    <div class="circles">
        {#each allContent.tiles as circe, idx}
            <Circle  {circe} {idx} />
        {/each}
    </div>
    <div class="tiles">
        {#each allContent.tiles as tile, idx}
            <Square {tile}  {idx} />
        {/each}
    </div>
</div>
<style>
    .content {
        position: relative;
        top:75px;
        height: calc(100vh - 75px);
        max-height: calc(100vh - 75px);
        /* background-repeat: no-repeat; */
        /* margin-top: 75px; */
        display: flex;
        flex-direction: column;
    }
    .circles {
        flex: 1;
        background: url('https://collections.newberry.org/IIIF3/Image/2KXJ8ZSFBTPJ9/350,250,1450,1050/max/0/default.jpg');
        background-position: bottom left;
        background-size: 100vw auto;

    }
    .tiles {
        flex-basis: 30vh;
        height: 30vh;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
    }
</style>	
