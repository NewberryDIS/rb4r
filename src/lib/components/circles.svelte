<script>
    export let cardHover, circe, idx
    const textPos = parseInt(circe.y) + 12
    import {width, height} from '$lib'
    // cropped image is 135 px shorter, ratio goes from 0.72 to 0.6
    let y = circe.y -135
    // ok I simplified the crap out of this and now its illegible:
    // the `bottom` value needs to acknowledge when the map is resizing based on the y axis vs the x axis; 
    // in other words, the map's container has a ratio that is greater than or less than the ratio of the map's sides; 
    // when the ratio is greater - the container is shorter and wider than the map - 
    // the distance between the top of the map and the dot needs to move at a different rate from when the ratio is smaller (taller)
    // so, the `bottom` assignment starts with asking 'which is *smaller* - the ratio of the width of the frame and the width of the map image?
    // or the of the height and and the height of the map image?
    $: left = $width && $width > 0 ? Math.floor($width * (circe.x / 1450)) - 25 : circe.x - 25
    $: bottom = Math.min($width / 1450, ($height - ( 75 + $height * 0.35 )) / 865 ) * ( 865 - y)
    // 0.65 * $height - 75
$: console.log(bottom)
    // $: idx === 3 && console.log('width / 1450  ',  $width / 1450 )
    // $: idx === 3 && console.log('width / 1450 * y',  Math.min($width / 1450, $height - 425 / 1000 ) * ( 1000 - circe.y))
</script>
<div id={circe.color} class="circle-wrap {cardHover === idx ? 'card-hover' : ''}"  style="left: {left}px; bottom: {bottom - 25}px;">
    <svg width="50" height="50">
        <circle r="25" cx="25" cy="25" fill="#{circe.color}" role="navigation" aria-label="show navigation" on:mouseenter={() => cardHover = idx} on:mouseleave={() => cardHover = 99} />
        <text x="25" y="37" text-anchor="middle" stroke="rgb(var(--midnight))" stroke-width="1px" font-size="33px">{idx + 1}</text>
    </svg>
</div>

<style>
    .circle-wrap.card-hover {
        filter: brightness(1.5);
    }
    .circle-wrap {
        position: absolute;
        pointer-events: none;
        transition: filter 200ms;
    }
    circle {
        pointer-events: auto;
    }
</style>
