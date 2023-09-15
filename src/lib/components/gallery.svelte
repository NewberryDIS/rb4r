<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import BiggerPicture from "bigger-picture/svelte";
    import "bigger-picture/css";
    const bgs = [
        "/map-bg.jpg",
        "/maps/00005-4908357.png",
        "/maps/00089-1210484339.png",
        "/maps/00092-3246154362.png",
        "/maps/00098-3907330411.png",
        "/maps/00106-2937688618.png",
        "/maps/00112-4151542721.png",
        "/maps/00113-2048741382.png",
        "/maps/00115-3716477855.png",
        "/maps/00117-3457568186.png",
        "/maps/00118-2356645542.png",
        "/maps/00119-2119900799.png",
        "/maps/00122-1396742090.png",
        "/maps/00125-2437440079.png",
        "/maps/00126-1024847607.png",
        "/maps/00128-3449629565.png",
        "/maps/00129-3449629566.png",
        "/maps/00130-3449629567.png",
        "/maps/00131-3449629568.png",
        "/maps/00140-1374624034.png",
        "/maps/00142-1374624036.png",
        "/maps/00143-1374624037.png",
        "/maps/00158-2523796087.png",
        "/maps/00159-1911213317.png",
        "/maps/00160-2561032557.png",
        "/maps/00161-2561032558.png",
        "/maps/00164-1653137829.png",
        "/maps/00165-1653137830.png",
        "/maps/00166-1653137831.png",
        "/maps/00167-1653137832.png",
    ];
    let bp, imageLinks;
    onMount(() => {
        bp = BiggerPicture({
            target: document.body,
        });

        // grab image links
        imageLinks = document.querySelectorAll("#images > a");

        // add click listener to open BiggerPicture
        for (let link of imageLinks) {
            link.addEventListener("click", openGallery);
        }
    });

    // function to open BiggerPicture
    function openGallery(e) {
        e.preventDefault();
        // console.log(e.currentTarget)
        bp.open({
            items: imageLinks,
            el: e.currentTarget,
        });
    }
</script>

<div id="images">
    {#each bgs as bg, idx}
        <a
            class="bp-link"
            href="{base}{bg}"
            data-img="{base}{bg}"
            data-thumb="{base}{bg}"
            data-alt=""
            data-caption={idx === 0
                ? "original map"
                : "computer-generated variation"}
            data-height={idx === 0 ? 1000 : 768}
            data-width={idx === 0 ? 1450 : 768}
        >
            <img class="bp-thumb" src="{base}{bg}" alt="" />
        </a>
    {/each}
</div>

<style>
    #images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 16px;
    }
    a {
        text-decoration: none;
        color: inherit;
        width: 250px;
        height: 250px;
        overflow: hidden;
    }
    img {
        object-fit: cover;
    }
</style>
