<script>
    import {page}  from '$app/stores'
    import {base} from '$app/paths'
    import {slugify } from '$lib'
    import '$lib/main.css';
    import allContent from '$lib/content.json';
    const storymapId = $page.params.storymap
    const lang =  $page.params.lang
    const content = allContent[lang]
    const storymapContent = allContent.tiles.filter(f => slugify(f.countryen) === $page.params.storymap).pop()
    const storymapurl = storymapContent.storymap
    // slugifier(storymap)
    const imgUrl = storymapContent.imagexy ? storymapContent.imagexy + '/max' : 'full/,300' 
    </script>
<main style="background-image: linear-gradient( rgba(var(--midnight), 0.7), rgba(var(--midnight), 0.7) ), url('https://collections.newberry.org/IIIF3/Image/{storymapContent.image}/{imgUrl}/0/default.jpg')">
    <div class="left" >
        <div class="logo">

            <a href="https://www.newberry.org/" class="center nolines" target="_blank">
                <img src="{base}/NewberryLogo_granite.png" height="64" width="317" alt={content.logoalt} />
            </a>
        </div>
        <h1>Race Before Race</h1>
        <!-- <img class="storymap-img" src="https://collections.newberry.org/IIIF3/Image/{storymapContent.image}/{imgUrl}/0/default.jpg" alt=""> -->
        <a class="home-btn" href="{base}/{$page.params.lang.replaceAll('/','')}" style="background: #{storymapContent.color};">{lang === 'en' ? "Choose Another Map": "Choose Another Map but in Spanish"}</a>
    </div>
    <div class="right">
        <iframe src="{ storymapurl }" frameborder="0" name="storymap i-frame"></iframe>
    </div>
</main>
<style>
    main {
        /* background: rgb(var(--midnight)); */
        /* color: rgb(var(--granite)); */
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        /* justify-content: ; */
        align-items: stretch;
    }

    .left {
        backdrop-filter: blur(10px) saturate(1) !important;
        flex-basis: 400px;
        height: 100%;
        gap : 10vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .logo {
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .logo a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo img {
        height: 64px;
    }
    .storymap-img {
        width: 80%; 
        margin: auto;
        border-radius: 10px;
        border: 1px solid rgb(var(--granite));
        box-shadow:  0 0 4px 4px rgba(var(--granite), 0.2);
    }
    h1 {
        width: 90%;
        color: rgb(var(--granite));
        font-size: 10vh;
        margin: 0 auto;
  font-family: "flecha";
    }
    .home-btn {
        width: 80%;
        margin: 0 auto 64px auto;
        padding: 32px;
        font-size: 24px;
        font-family: 'styrene';
        font-weight: 900;
        color: inherit;
        text-decoration: none;
        text-align: center;
        border-radius: 10px;
        border: 1px solid rgb(var(--granite));
        box-shadow:  0 0 4px 4px rgba(var(--granite), 0.2);
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        position: relative;
    }
    .home-btn:hover {
        box-shadow: 0 0 4px 4px rgba(var(--granite), 0.3);
    }
    .home-btn::after {
        content: '';
        position: relative;
        /* position: absolute; */
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.01;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(var(--midnight), 0.4);
        transition: opacity 0.3s ease-in-out;
    }

    /* Fade in the pseudo-element with the bigger shadow */
    .home-btn:hover::after {
        opacity: 0.99;
    }
    .right {
        flex: 1;

    }
    .right iframe {
        width: 100%;
        height: 100%;
    }
    </style>
