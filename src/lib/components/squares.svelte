<script>
    import {page} from '$app/stores'
    import {base} from '$app/paths'
    import {slugify} from '$lib'
    export let tile, idx
    $: lang = $page.params.lang
    $: countrykey  = 'country' +  ( lang || 'en' )
    $: slug = slugify(tile.countryen)
    $: linkUrl =`${ lang ? '/' + lang : ''}/${ slug }` 

    const imgUrl = tile.imagexy ? tile.imagexy + '/max' : 'full/,300' 
</script>
<a  class="card card-{idx}" >
    <p class="card-text" style=" background-color: #{tile.color};" >
        {tile[countrykey]}
    </p>
        <img src="{base}/{slug}.jpg" alt="" class="card-image" />
    <p class="card-text" style=" background-color: #{tile.color};" >
        {tile.text}
    </p>
</a>

<style>
.card {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    height: 30vh;
    transition: 100ms;
}
.card-image {
    /* overflow: hidden; */
    flex: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
.card-text {
    flex-basis: 45px;
    height: 25px;
    width: 100%;
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
}
.card-0 { grid-area: 1 / 1 / 2 / 2; }
.card-1 { grid-area: 1 / 2 / 2 / 3; }
.card-2 { grid-area: 1 / 3 / 2 / 4; }
.card-3 { grid-area: 1 / 4 / 2 / 5; }
.card-4 { grid-area: 1 / 5 / 2 / 6; } 
</style>
