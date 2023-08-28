
<script>
    export let cardHover, circe, idx
    const textPos = parseInt(circe.y) + 12
</script>
<div class="circle-wrap {cardHover === idx ? 'card-hover' : ''}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1452 1056">
        <circle r="25" cx={circe.x} cy={circe.y} fill="#{circe.color}" role="navigation" aria-label="show navigation" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99} />
        <text x={circe.x} y={textPos} text-anchor="middle" stroke="rgb(var(--midnight))" stroke-width="2px" font-size="37px">{idx + 1}</text>
    </svg>

</div>

<style>
    .card-hover {
        filter: brightness(1.5);
    }
.circle-wrap {
    position: fixed;
    /* top: 0; */
    bottom: 350px;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100vw;
    /* height: calc(100vh - 75px); */
    pointer-events: none;
        transition: 200ms;
}
svg {
    width: 100vw;
    object-fit: cover;

}
svg, circle {
    position: relative;
}
circle {
    pointer-events: auto;
}
</style>
