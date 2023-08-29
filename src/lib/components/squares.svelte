<script>
    import {page} from '$app/stores'
    import {base} from '$app/paths'
    import {slugify} from '$lib'
    export let cardHover, tile, idx
    $: lang = $page.params.lang || 'en'
    $: countrykey  = 'country' +  lang 
    $: slug = slugify(tile.countryen)
    $: linkUrl =`${ lang ? '/' + lang : ''}/${ slug }` 

    const imgUrl = tile.imagexy ? tile.imagexy + '/max' : 'full/,300' 
</script>
<a href="{base}/{lang === 'es' ? lang + '/' : ''  }{slug}" class="card card-{idx} {cardHover === idx ? 'card-hover' : ''}" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99} >
    <p class="card-text" style=" background-color: #{tile.color};" >
        {tile[countrykey]}
    </p>
    <!-- <div class="card-image" style="background-image: url('{base}/{slug}.jpg')"><span></span></div> -->
    <div class="img-wrapper">
    <img src="{base}/{slug}.jpg" alt="" class="card-image" />
    </div>
    <p class="card-text btm" style=" background-color: #{tile.color};" >
        <span>
            {tile[lang]}
        </span>
    </p>
</a>

<style>
    .btm {
        line-height: 1em;
    }
.card {
    flex:1;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    max-height: 350px;
    transition: 100ms;
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
    /* flex: 1; */
    height: 260px;
    /* background-position: center; */
    /* background-size: cover; */
    /* height: 100%; */
    /* max-height: 100%; */
    /* width: auto; */
    object-fit: cover;
    /* object-position: center; */
}
.card-text {
    width: 100%;
    /* flex: 1; */
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
/* .card-text span { */
/*     white-space: nowrap; */
/*     overflow: hidden; */
/* text-overflow: ellipsis; */
/**/
/*     } */
/**/
/* .card-0 { grid-area: 1 / 1 / 2 / 2; } */
/* .card-1 { grid-area: 1 / 2 / 2 / 3; } */
/* .card-2 { grid-area: 1 / 3 / 2 / 4; } */
/* .card-3 { grid-area: 1 / 4 / 2 / 5; } */
/* .card-4 { grid-area: 1 / 5 / 2 / 6; }  */
</style>
