<script>
    import {page} from '$app/stores'
    export let tile, activeValue, idx
    $: countrykey  = 'country' +  ( $page.params.lang === 'es' ? 'es' : 'en' )
    $: console.log(activeValue)

    </script>

<a href="storymap?s={tile.storymap}" class="tile{activeValue == idx ? '' : ' nope'}"  >
    <div class="tile-circle">
        <div class="circle" style={`background-color: #${tile.color}`}>
            {idx + 1}
        </div>
    </div>
    <div class="tile-rectangle">
        <div class="tile-top-text">{tile[countrykey]}</div>
        <div class="tile-btm-text">{tile.text}</div>
    </div>
    <div class="tile-image">
        <img
            width="160"
            height="160"
            src={`https://collections.newberry.org/IIIF3/Image/${tile.image}/square/,160/0/default.jpg`}
            alt=""
        />
    </div>
</a>

<style>
    .nope {
        /* display: none; */
        visibility: 0; 
        opacity: 0.01;

    }
    .tile:not(.nope){
        opacity: 0.99;
    }
    .tile {
        position: fixed;
        right: 50px;
        top: 125px;
        z-index: 9999;
        display: flex;
        justify-content: flex-start;
        transition: visibility 0s, opacity 200ms linear;
        text-decoration: none;
        color: inherit;
    }
    @media screen and (max-width: 999px){
        .tile {
            flex-direction: column;
            height: 600px;
            width: 150px;
        }
        .tile-circle {
            border-radius: 50% 50% 0 0 ;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-left: 1px solid black;
        }
        .tile-rectangle {
            /* height: auto; */
        align-items: center;
        justify-content: center;
            height: 50px;
            border-left: 1px solid black;
            border-right: 1px solid black;
        }
        .tile-top-text {
            text-align: center;
            width: 100%;
        }
        .tile-btm-text {
            display: none;
        }
    }
    @media screen and (min-width: 1000px){
        .tile {
            flex-direction: row;
            width: 600px;
            height: 150px;
        }
        .tile-circle {
            border-radius: 50% 0 0 50%;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-left: 1px solid black;
        }
        .tile-rectangle {
        flex: 1;
        align-items: flex-start;
        justify-content: space-evenly;
            height: 150px;
            border-top: 1px solid black;
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    }
    .tile-circle {
        flex-basis: 150px;
        background: rgb(var(--granite));
    }
    .tile-rectangle {
        box-sizing: border-box;
        background: rgb(var(--granite));
        display: flex;
        flex-direction: column;
        padding-inline: 16px;
    }
    .circle {
        color: rgb(var(--midnight));
        border-radius: 50%;
        /* margin: 1px; */
        min-height: 148px;
        min-width: 148px;
        font-family: styrene;
        font-size: 75px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tile-image {
        box-sizing: border-box;
        width: 150px;
        height: 150px;
        overflow: hidden;
        border: 1px solid black;
        /* border-width: 1px 1px 1px 0; */
        /* border-color: rgb(var(--midnight)); */
    }
    .tile-image img {
        width: 160px;
        height: 160px;
        object-fit: cover;
    }
    .tile-top-text {
        font-size: 25px;
        line-height: 24px;
        font-weight: 900;
    }
    .tile-btm-text {
        font-size: 20px;
        line-height: 18px;
    }

    </style>
