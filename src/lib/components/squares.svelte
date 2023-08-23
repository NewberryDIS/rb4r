<script>
    import {page} from '$app/stores'
    export let tile, activeValue, idx
    $: countrykey  = 'country' +  ( $page.params.lang === 'es' ? 'es' : 'en' )
    $: console.log(activeValue)
    function handleTap (int){
        activeValue = activeValue == int ? 99 : int
    }
    function handleKeyup(e, int){
        if ( e.key ==='Enter' || e.key === 'Space'  ){
            activeValue = activeValue == int ? 99 : int
        }
    }
    $: active = activeValue === idx
</script>
<a href="storymap/{tile.countrykey}" class="card {active ? "active" : "inactive"}" style="left: {idx * 20}vw; right: {idx * 20 + 20}vw;">
        <button class="header" style=" background-color: #{tile.color};" on:click={() => handleTap(idx)} on:keyup={() => handleKeyup(idx)}>
            {tile[countrykey]}
    </button>
        {#if active}
    <section style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://collections.newberry.org/IIIF3/Image/{tile.image}/square/,160/0/default.jpg;">
            {tile.text}
    </section>
        {/if}
</a>

<style>
    .inactive section {
        opacity: 0.01;
        height: 1px;
        max-height: 1px;
        color: transparent;

    }
    .inactive.card {
        height: 45px;
    }
    .active.card {
        height: 30vh;
    }
    .active section {
        max-height: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(var(--bg-color-2));
        background-size: cover;
        background-position: center; 
        font-size:  25px;
        padding: 16px;
        text-align: center;
    }
    .card {
    text-decoration: none;
    z-index: 9999;
        position: fixed;
        bottom: 0;
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        transition: 100ms;
    }
    .card .header {
        width: 100%;
        border: none;
        font-size: 25px;
        padding: 5px;
        text-align: center;
    }
    </style>
