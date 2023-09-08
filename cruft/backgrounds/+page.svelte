<script>
    import {base} from '$app/paths'
    import { onMount } from 'svelte'
    import '$lib/main.css'
import BiggerPicture from "bigger-picture/svelte";
import "bigger-picture/css";
    const bgs = [  '00005-4908357.png',
        '00089-1210484339.png',
        '00092-3246154362.png',
        '00098-3907330411.png',
        '00106-2937688618.png',
        '00112-4151542721.png',
        '00113-2048741382.png',
        '00115-3716477855.png',
        '00117-3457568186.png',
        '00118-2356645542.png',
        '00119-2119900799.png',
        '00122-1396742090.png',
        '00125-2437440079.png',
        '00126-1024847607.png',
        '00128-3449629565.png',
        '00129-3449629566.png',
        '00130-3449629567.png',
        '00131-3449629568.png',
        '00140-1374624034.png',
        '00142-1374624036.png',
        '00143-1374624037.png',
        '00158-2523796087.png',
        '00159-1911213317.png',
        '00160-2561032557.png',
        '00161-2561032558.png',
        '00164-1653137829.png',
        '00165-1653137830.png',
        '00166-1653137831.png',
        '00167-1653137832.png',
    ]

    let bp, imageLinks
    onMount(( ) => {

        bp = BiggerPicture({
            target: document.body,
        })

        // grab image links
        imageLinks = document.querySelectorAll('#images > a')

        // add click listener to open BiggerPicture
        for (let link of imageLinks) {
            link.addEventListener("click", openGallery);
        }
    })

    // function to open BiggerPicture
    function openGallery(e) {
        e.preventDefault()
        console.log(bp)
        console.log(e.currentTarget)
        console.log(imageLinks)
        bp.open({
            items: imageLinks,
            el: e.currentTarget,
        })
    }
</script>
<div id="images" class="images">
    <img src="{base}/map-bg.jpg" class="main-img" />
    {#each bgs as bg}
        <a class="lil-wrap" 
            data-img="{base}/maps/{bg}"
            data-thumb="{base}/maps/{bg}"
            data-alt="image description"
            data-height="1024"
            data-width="1024"
            href="{base}/maps/{bg}">
            <img class="lil-img" src="{base}/maps/{bg}" alt="" />
        </a>
        <!-- content here -->
    {/each}
</div>
<style>
    :global(body){
        background: rgba(var(--midnight), 0.9) !important;
    }
    .main-img {
        /* width: 616px; */
        /* height: 620px; */
        position: relative;
        overflow: hidden;
        object-fit: cover;
        /* float: left; */
    }
    .images {

        width: 70vw;
        margin: 64px auto;
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* gap: 16px; */
/* overflow-wrap: break-word; */
/*         justify-content: flex-start; */
/*         align-items: flex-start; */
    }
    .lil-img {
        /* width: 300px; */
        /* height: 300px; */
        /* max-width: 300px; */
        /* max-height: 300px; */
        object-fit: cover;
    }
.images {
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.main-img {
 flex-grow: 2;
  width: 600px;
  height: 600px;
}

.lil-img {
width: 300px;
  height: 300px;
  border: 1px solid black;
}
    </style>
