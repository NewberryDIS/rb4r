<script>
    import {width, height} from '$lib'
</script>

<div class="wh">
    <p>width: {$width}</p>
    <p>height: {$height}</p>
    <p>bg map height: {Math.round( $width * (1000/1450) )}
</div>


<style>
    .wh {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        background: #333;
    }
    p {
        font-family: styrene;
        margin: 0;
        padding: 2px 8px;
        font-size: 0.9rem;
        color: #ccc;
    }
    </style>
