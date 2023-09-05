<script>
    import {page} from '$app/stores'
    import {base} from '$app/paths'
    $: lang = $page.params.lang || 'en'
    import '$lib/main.css'
    import content from '$lib/content.json'
    import Gallery from '$comps/gallery.svelte'

    // $: lang = $page.params.lang
    const bgs = [  
        '00005-4908357.png',
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
    const bg = bgs[Math.floor(Math.random() * bgs.length)]
    let bgc = true
    function bgswap () {
        bgc = !bgc
    }
    let galOpen = false
</script>

<div class="bg-1-image" style="background-image: url('{base}/maps/{bg}')"></div>
<div class="bg-2-wedge" ></div>
<main class={bgc ? 'bgl' : 'bgd'}>
    <section class="top-level-wrapper main">
        <div class="link-block">
            <a class="arrow-link" href="{base}/gallery/{lang === 'es' ? 'es' : ''}"><img width="50" height="50"src="{base}/arrow.png" alt=""></a>
            <p><a href="{base}/gallery/credits" class="lang-link {lang !== 'es' ? 'active' : ''}">en</a><a href="{base}/gallery/es/credits" class="lang-link {lang === 'es' ? 'active' : ''}">es</a></p>
        </div>
        <article>
            <header>
                <h1 on:click={bgswap}>{content[lang].title}</h1>
            </header>
            <section>
                <p>{@html content[lang].credits.toptext}
            </section>
            <section>
                <dl>
                    <dt>{content[lang].credits.dl[0]}</dt>
                    <dd>Noémie Ndiaye, Lia Markey, Christopher Fletcher, Rebecca L. Fall, Yasmine Hachimi</dd>

                    <dt>{content[lang].credits.dl[1]}</dt>
                    <dd>Barbara Korbel, Kimberly Nichols, Gabriel Hamer, Leith Calcote</dd>

                    <dt>{content[lang].credits.dl[2]}</dt>
                    <dd>Patrick Kepley</dd>

                    <dt>{content[lang].credits.dl[3]}</dt>
                    <dd>Sarah Boyd Alvarez</dd>

                    <dt>{content[lang].credits.dl[4]}</dt>
                    <dd>Catherine Gass, <span class="myname" on:click={() => galOpen = !galOpen}>Nicolas White</span>, Jennifer Wolfe</dd>

                    <dt>{content[lang].credits.dl[5]}</dt>
                    <dd>M. N. Kennedy, Andrea Villasenor</dd>

                    <dt>{content[lang].credits.dl[6]}</dt>
                    <dd>Georgina Valverde, Luisa Feuerstein</dd>

                    <dt>{content[lang].credits.dl[7]}</dt>
                    <dd>Chris Cermak, Pete Diernberger, Mike Mitchell, Jason Ulane</dd>
                </dl>
                <p>{@html content[lang].credits.partners}</p>
                <p>{@html content[lang].credits.donors}</p>
                <dl class="the-end">
                    <dt>RaceB4Race&reg;</dt>
                    <dd>{@html content[lang].credits.explan}</dd>
                </dl>
            </section>
        </article>
    </section>
    {#if galOpen}
        <section class="gallery top-level-wrapper {galOpen ? 'open' : ''}" >
            <Gallery />
        </section>
    {/if}
</main>
<style>
    .myname {

        cursor: help;
        transition: 150ms;
    }
    .myname:hover {
        color: #FF00FF;
    }
    .gallery {
        width: 900px;
    }
    .link-block {
        position: sticky;
        top: 77%;
        left: 0;
        height: 75px;
        width: 50px;
        display: flex;
        flex-direction: column;

    }
    .link-block p {
        display: flex;
        width: 100%; 
        padding: 0;
        margin: 2px;
    }
    .lang-link {
        text-transform: uppercase;
        font-size: 0.87rem;
        font-family: 'styrene';
        text-align: center;
        flex: 1;
        margin: 0;
        paddng: 4px;
        text-decoration: none;
        color: inherit;
    }
    .lang-link:not(.active){
        border: 1px solid transparent;
    }
    .lang-link:not(.active):hover {
        border: 1px solid rgba(var(--midnight),0.5);
    }
    .lang-link.active{
        border: 1px solid rgb(var(--midnight), 1);
    }
    main {
        backdrop-filter: blur(15px) saturate(3) !important;
        z-index: 1;
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
    }
    .top-level-wrapper {
        position: relative;
        height: max(650px, 80vh );
        overflow-y: auto;
        border-radius: 10px;
        padding: 16px;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: flex-start;
        min-height: 0;
        min-width: 0;
    }
    .top-level-wrapper.main {
        width: clamp(500px, 45vw, 750px);
    }
    section {
        /* width: max(550px, 30vw ); */
        max-height: 87vh;
        margin: 4vh 2vw;
    }
    h1 {
        cursor: help;
        font-size: 7.5vh;
        margin-block: 0.66em;
    }
    dt:not(.the-end) {
        margin-block: 8px 4px ;
        padding-block: 8px 4px ;
        text-transform: uppercase;
        font-weight: 900;
    }
    dd {
        margin-block: 4px;
        padding-block: 4px;
        border-bottom: 1px solid rgba(var(--midnight), 0.5);
    }
    .the-end {
        padding-bottom: 5vh;
    }
    .arrow-link {
        opacity: 0.5;
        position: sticky;
        /* bottom: 0; */
        top: 77%;
        left: 0;
        width: 50px;
        height: 50px;
        transition: 200ms;
    }
    .arrow-link:hover {
        opacity: 1;
    }
    .mid-text-link {
        font-style: italic;
    }
    .bg-1-image, 
    .bg-2-wedge {

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .bg-1-image {
        width: 100vw;
        z-index: -1;
        background-position: center;
        background-size: cover;
    }
    .bgl {

        background: rgba(var(--granite),0.7);
    }
    .bgl .top-level-wrapper {

        box-shadow:  0 0 8px  8px rgba(var(--midnight),.1);
        background: rgba(var(--granite),0.7);
    }
    .bgd {

        background: rgba(var(--midnight),0.7);
    }
    .bgd .top-level-wrapper {

        box-shadow: inset 0 0 8px  8px rgba(var(--midnight),.1);
        background: rgba(var(--granite),0.97);
    }
</style>
