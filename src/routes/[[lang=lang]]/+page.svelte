<script>
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    import { page } from '$app/stores';
    import Header from '$comps/header.svelte';
    import Circle from '$comps/circles.svelte';
    import Square from '$comps/squares.svelte';
    $: lang = $page.params.lang || 'en';
    $: content = lang in allContent ? allContent[lang] : allContent.en;
    let activeValue = 99

    function handleBodyClick(event){
        if (!['A', 'BUTTON', 'circle'].includes( event.target.nodeName ) ){
            activeValue = 99
        }
    }
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>
<svelte:body on:click={(e) => handleBodyClick(e)} />
<Header {content} />
    
<div class="content">
    <div class="content-text">
        <h3>{content.hero.header}</h3>
        <p>{content.hero.subtitle}</p>
    </div>
    <div class="tiles">
        {#each allContent.tiles as tile, idx}
            <Square {tile} bind:activeValue  {idx} />;
        {/each}
    </div>
{#each allContent.tiles as circe, idx}
    <Circle bind:activeValue {circe} {idx} />
{/each}
</div>
<style>
    .content {
        position: fixed;
        /* pointer-events: none; */
        top: 75px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, #000, transparent 94%),
            url('https://collections.newberry.org/IIIF3/Image/2KXJ8ZSFBTPJ9/350,250,1450,1050/max/0/default.jpg');
        background-position: bottom left;
        background-size: 100vw auto;
        /* background-repeat: no-repeat; */

        /* margin-top: 75px; */
        padding: 2vw;
        display: flex;
        flex-direction: column;
    }
    .content-text {
        width: 80%;
    }
    .content-text h3,
    .content-text p {
        margin-bottom: 0;
        color: rgb(var(--bg-color-2));
    }
    .content-text h3 {
        font-family: "flecha";
        font-size: 4.5rem;
    }
    .content-text p {
        font-family: styrene;
        font-size: 20px;
        line-height: 20px;
        /* text-transform: uppercase; */
    }
</style>	
