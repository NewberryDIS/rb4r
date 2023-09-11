<script>
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import { slugify, width } from '$lib'
    export let cardHover, tile, idx
    $: lang = $page.params.lang || 'en'
    $: slug = slugify(tile.en.country)
</script>
{#if $width > 1000}
    <a href="{base}/{lang === 'es' ? lang + '/' : ''  }{slug}" id="cardgrid-{idx}" class="cardgrid {cardHover === idx ? 'card-hover' : ''}" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99}  style=" background-color: #{tile.color};">
        <p class="card-text" style=" background-color: #{tile.color};" >
            {tile[lang].country}
        </p>
        <div class="card-image" style="background-image: url('{base}/{slug}.jpg')"><span> </span></div>
        <p class="card-text btm" style=" background-color: #{tile.color};" >
            <span>
                {tile[lang].title}
            </span>
        </p>
    </a>
{:else}
    <a href="{base}/{lang === 'es' ? lang + '/' : ''  }{slug}"   id="cardgrid-{idx}" class="cardgrid {cardHover === idx ? 'card-hover' : ''}" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99}  >
        <div class="grid-image" style="background-image: url('{base}/{slug}.jpg'); left: 0;"  />
        <div class="grid-text"  style=" background-color: #{tile.color};">
            <div class="grid-country">{tile[lang].country}</div>
            <div class="grid-title"  >{tile[lang].title}</div>
        </div>
    </a>
{/if}

<style>
.cardgrid {
    display: flex;
    color: inherit;
    text-decoration: none;
    transition: 200ms;
    position: relative;
    /* height: 100%; */
}
@media screen and (min-width: 1000px) {
    .card {
        flex:1;
    }
    .card-image {
        max-height: 260px;
        flex: 1;
    }
    .cardgrid {
        flex-direction: column;
        flex: 1;
    }
}
@media screen and (max-width: 999px) {
    .card {
        flex: 1 0 auto;
        height: 50%;
    }
    .card-text {
        flex-basis: initial;
        /* flex: 1; */
    }
    .btm span{
        font-size: max(3vw, 24px);
        min-width: 0;
        word-wrap: break-word;
    }
    .card-image {
        /* display: none; */
        height: initial;
        flex: 1;
    }
    .cardgrid {
        flex: 1 0 auto;
    }
    .grid-text {

        min-width: 150px;
    }
}
.grid-image { 
    border: 1px solid black;
    height: 100%;
    transition: 200ms;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 50% 0 0 50%;
    background-position: center;
    background-size: cover;
}
.grid-text { 
    flex:2;
    padding: 8px 1vw 8px 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
} 
.grid-text > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.grid-title {
    justify-content: flex-start;
    font-size: 18px;
    flex: 1;
}
.grid-country {
    justify-content: flex-end;
    font-size: 24px;
    flex-basis: 28px;
}
.cardgrid .card-text, .cardgrid .card-image {
    min-width: 0;
}

.card {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 350px;
    gap: 0;
    min-width: 0;
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    transition: 200ms;
}
.card-hover {
    filter: brightness(1.25);
}
.img-wrapper {
    width: 100%;
    flex: 1;
    height: 260px;
}
.card-image {
    width: 100%;
    background-position: center;
    background-size: cover;
}
.card-text {
    flex-basis: 45px;
    min-height: 45px;
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    padding-inline : 8px;
    margin: 0;
    text-align: center;
}
.btm {
    line-height: 1em;
}
</style>
