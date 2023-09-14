
<script>
    import { base } from '$app/paths'
    export let cardHover, circe, idx
    const textPos = parseInt(circe.y) + 12
    import {slugify, width, height} from '$lib'
    $: left = $width && $width > 0 ? Math.floor($width * (circe.x / 1450)) - 25 : circe.x - 25
    $: bottom = Math.min($width / 1450, $height - 425 / 1000 ) * ( 1000 - circe.y)
    // $: idx === 3 && console.log('width / 1450  ',  $width / 1450 )
    // $: idx === 3 && console.log('width / 1450 * y',  Math.min($width / 1450, $height - 425 / 1000 ) * ( 1000 - circe.y))
</script>
<a href="{base}/gallery/{slugify(circe.en.country)}" id={circe.color} class="circle-wrap {cardHover === idx ? 'card-hover' : ''}"  style="left: {left}px; bottom: {bottom - 25}px;">
    <svg width="50" height="50">
        <circle r="25" cx="25" cy="25" fill="#{circe.color}" role="navigation" aria-label="show navigation" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99} />
        <text x="25" y="37" text-anchor="middle" stroke="rgb(var(--midnight))" stroke-width="1px" font-size="33px">{idx + 1}</text>
    </svg>
</a>

<style>
    .card-hover {
        filter: brightness(1.5);
    }
    .circle-wrap {
    position: absolute;
    pointer-events: none;
        transition: filter 200ms;
}
svg {
    /* width: 100vw; */
    /* object-fit: cover; */

}
svg, circle {
    /* position: relative; */
}
circle {
    pointer-events: auto;
}
</style>
