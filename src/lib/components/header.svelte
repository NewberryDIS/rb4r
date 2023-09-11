<script>
    import { page } from '$app/stores';
    import {base } from '$app/paths'
    export let content
    import { width, height, vari } from '$lib'
    $: lang = $page.params.lang || 'en'
</script>

<header>
    <div class="header-left">
        <a href="https://www.newberry.org/" class="center nolines" target="_blank">
            <img src="{base}/NLogo.png" height="64" width="64" alt={content.logoalt} />
        </a>
        <div class="left-text">
            <h1 class="maxi-h1">{content.title}: {content.subtitle}</h1>
        </div>
    </div>
    <div class="header-right">
        <div class="change-lang">
            <a href="{base}/es" class={lang === 'es' ? 'active' : ''}>
                {content.es}
            </a>
            <a href="{base}/" class={lang !== 'es' ? 'active' : ''}>
                {content.en}
            </a>
            <a href="{base}/{lang ? 'es/' : ''}credits" >
                { lang === 'es' ? 'credits' : 'Credits' }
            </a>
        </div>
    </div>
</header>

<style>
    /* .truncate { */
    /**/
    /*     white-space: nowrap; */
    /*     overflow-x: hidden; */
    /*     overflow-y: visible; */
    /*     text-overflow: ellipsis; */
    /* } */
    .left-text {
        max-height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        margin-inline: 32px;
    }
    .maxi-h1 {
        margin: 0;
        padding: 0;
    }
    .maxi-h1 {
        width: 65vw;
        font-weight: 900;
        font-size: 32px;
        line-height: 28px;
    }
    header {
        /* flex-basis: 75px; */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 32px;
        color: rgb(var(--fg-color-1));
        background: var(--bg-2);
        background-attachment: fixed;
    }
    .header-left {
        min-width: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .header-left a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-left img {
        height: 64px;
    }
    .header-right h1,
    .header-right h2 {
        line-height: 20px;
        margin: 0;
        padding: 0;
    }
    .header-right h1 {
        font-size: 30px;
    }
    .header-right h2 {
        font-size: 20px;
    }
    .header-right {
        background: rgb(var(--bg-color-1));
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        background: var(--bg-2);
        background-attachment: fixed;
    }
    .change-lang {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1px;
        margin: 1px 0;
        z-index: 40;
    }
    .change-lang a {
        font-size: 0.77rem;
        background: rgb(var(--bg-color-1));
        background: rgb(var(--fg-color-1));
        text-align: center;
        width: 75px;
        color: inherit;
        font-family: 'styrene';
        text-decoration: none;
        background: none;
        padding: 2px;
        transition: 150ms;
    }
    .change-lang a.active {
        border: 1px solid rgb(var(--midnight));
    }
    .change-lang a:not(.active) {
        border: 1px solid transparent;

    }
    .change-lang a:not(.active):hover {
        border: 1px solid rgba(var(--fg-color-1), 0.5);
    }
</style>
