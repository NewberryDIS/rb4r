<script>
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { slugify } from '$lib'
    $: slug = slugify(tile.en.country)
    $: lang = $page.params.lang || 'en'
    export let tile
    let tileHeight
</script>

<div class="tile" bind:clientHeight={tileHeight}>
    <div class="image" style="background-image: url('{base}/{slug}.jpg'); flex-basis: {tileHeight  ? Math.min(tileHeight, 200) : 100}px;"></div>
    <div class="text">
        <p class="country">{tile[lang].country}</p>
        <p class="title">{tile[lang].title}</p>
    </div>
</div>

<style>
    .tile {
        flex: 1;
        min-width: 400px;
        display: flex;
        align-items: stretch;
        justify-content: stretch;

    }
    .image {

        /* flex-basis:  */
    }
    .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
</style>
