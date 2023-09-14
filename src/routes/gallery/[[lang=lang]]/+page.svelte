<script>
    import "$lib/gallery/main.css";
    import allContent from "$lib/content.json";
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    import Header from "$lib/gallery/components/header.svelte";
    import Circle from "$lib/components/circles.svelte";
    import Square from "$lib/gallery/components/squares.svelte";
    $: lang = $page.params.lang || "en";
    $: content = allContent[lang];
    let cardHover = 99;
</script>

<svelte:head>
    <title>{content.title}</title>
</svelte:head>

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
        height: 100vh;
        top: 0;
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
