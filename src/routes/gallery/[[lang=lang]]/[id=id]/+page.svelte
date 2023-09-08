<script>
    import {base} from '$app/paths'
    import {page}  from '$app/stores'
    import {slugify } from '$lib'
    import '$lib/main.css';
    import allContent from '$lib/content.json';

    const gallery = $page.url.pathname.includes('gallery')
    $: storymapId = $page.params.id
    $: lang =  $page.params.lang || 'en'
    $: content = allContent[lang]
    $: storymapContent = allContent.tiles.filter(f => slugify(f.en.country) === storymapId)[0]
    $: storymapurl = storymapContent[lang].storymap
    $: imgUrl = storymapContent.imagexy ? storymapContent.imagexy + '/max' : 'full/,300'
</script>
<svelte:head>
    <title>{content.title}</title>
</svelte:head>
<main >
    <div class="left" style="background-image: linear-gradient( rgba(var(--midnight), 0.7), rgba(var(--midnight), 0.7) ), url('{base}/{storymapId}.jpg');" >
        <div class="bg" ></div>
        <div class="logo">
            <a href="https://www.newberry.org/" class="center nolines" target="_blank">
                <img src="{base}/NLogo_granite.png" height="50" width="50" alt={content.logoalt} />
            </a>
            <a class="home-link" href="{base}/{gallery ? 'gallery/' : ''}{$page.params.lang || ''}" >
                {content.title}
            </a>
        </div>
        <h1 class="storymap-title">{storymapContent[lang].title}</h1>
        <!-- <img class="storymap-img" src="https://collections.newberry.org/IIIF3/Image/{storymapContent.image}/{imgUrl}/0/default.jpg" alt=""> -->
        <div class="btn-box"> 
            <a class="home-btn" href="{base}/{gallery ? 'gallery/' : ''}{$page.params.lang || ''}" style="background: #{storymapContent.color};">{lang === 'en' ? "Choose another object": "Elige otro objeto"}</a>
            <div class="mini-btn-box">
                <a class="lang-btn" href="{base}/{gallery ? 'gallery/' : ''}es/{$page.params.id}" style="background: #{storymapContent.color};">{content.es}</a>
                <a class="lang-btn" href="{base}/{gallery ? 'gallery/' : ''}{$page.params.id}" style="background: #{storymapContent.color};">{content.en}</a>
            </div>
        </div>
    </div>
    <div class="right">
        <iframe src="{ storymapurl }" frameborder="0" title="storymap i-frame"></iframe>
        <!-- {storymapurl} -->
    </div>
</main>
<style>
    .home-link {
        font-size: 24px;

        color: rgb(var(--bg-color-2));
        text-decoration: none;
    }
    main {
        /* background-position: 75% 50%; */
        /* background-position: center; */
        /* background-size: 400px 100%; */
        /* background-repeat: no-repeat; */
        /* background: rgb(var(--midnight)); */
        /* color: rgb(var(--granite)); */
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        /* justify-content: ; */
        align-items: stretch;
    }
    a:hover {
        filter: brightness(1.25);
        transition: 200ms ease-in-out;
    }
    .bg {
        position: absolute;
        left:0;
        right: 0;
        top: 0;
        bottom: 0;
        /* z-index: 1; */

        backdrop-filter: blur(5px) saturate(3) !important;
        }
        .logo, .storymap-title, .home-btn {
            z-index: 999;
        }
        .left {
            /* z-index: 40; */
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            padding: 16px;
            flex-basis: 350px;
            height: 100vh;
            gap : 10vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            height: 50px;
            width: 100%;
            min-width: 0;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

        }
        .logo a {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            line-height: 22px;
        }
        .logo img {
            height: 50px;
        }
        h1 {
            width: 95%;
            color: rgb(var(--bg-color-2));
            font-size: 5vh;
            padding: 1vw;
            margin: 0 auto;
            font-family: "flecha";
        }

        .home-btn {
            padding: 24px;
            font-size: 20px;
        }
        .lang-btn {
            padding: 8px 12px;
            font-size: 18px;
            flex: 1;
        }
        .home-btn, .lang-btn {
            margin: 10px;
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
        .home-btn:hover, .lang-btn:hover {
            box-shadow: 0 0 4px 4px rgba(var(--granite), 0.3);
        }
        .home-btn::after, .lang-btn::after {
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
        .btn-box {
            margin: 0 auto 32px auto;
            display: flex;
            flex-direction: column;
            justify-content: stretch;
            align-items: stretch;
            width: 90%;
            /* padding: 24px; */
        }
        .home-btn {
            flex: 3;
        }
        .mini-btn-box {
            flex: 1;
            display: flex;
            justify-content: stretch;
            align-items: center;
        }
        .right {
            flex: 1;
            background: rgb(var(--bg-color-2));
        }
        .right iframe {
            width: 100%;
            height: 100%;
        }
    </style>
