
<script>
    export let activeValue, circe, idx
    function handleTap (int){
        activeValue = activeValue == int ? 99 : int
    }
    function handleKeyup(e, int){
        if ( e.key ==='Enter' || e.key === 'Space'  ){
            activeValue = activeValue == int ? 99 : int
        }
    }
    const textPos = parseInt(circe.y) + 12
</script>
<div class="map-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1452 1056">
        <circle r="25" cx={circe.x} cy={circe.y} fill="#{circe.color}" role="navigation" aria-label="show navigation" on:click={() => handleTap(idx)} on:keyup={() => handleKeyup(idx)} />
        <text x={circe.x} y={textPos} text-anchor="middle" stroke="rgb(var(--midnight))" stroke-width="2px" font-size="37px">{idx + 1}</text>
    </svg>

</div>

<style>
.map-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100vw;
    z-index: 100;
    /* height: calc(100vh - 75px); */
    pointer-events: none;
}
svg {
    width: 100vw;
    object-fit: cover;


}
circle {
    pointer-events: auto;
}
</style>
