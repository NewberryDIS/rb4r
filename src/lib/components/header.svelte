<script>
    import { page } from '$app/stores';
    import {base } from '$app/paths'
    export let content;
    let titleLeft = true
    // titleLeft = false

</script>

<header>
    <div class="header-left">
        <a href="https://www.newberry.org/" class="center nolines" target="_blank">
            <img src="{base}/NLogo.png" height="64" width="64" alt={content.logoalt} />
        </a>
        <div class="left-text">
            {#if titleLeft}
                <h1 class="mini-h1 truncate">{content.title}: {content.subtitle}</h1>
            {/if}
            <div   class="truncate header-hero">
                <p class="truncate hero-header">{content.hero.header}</p>
                <p class="truncate hero-subheader">{content.hero.subtitle}</p>

            </div>

        </div>
    </div>
    <div class="header-right">
        <div class="change-lang">
            <a href="{base}/es" class={$page.params.lang === 'es' ? 'active' : ''}>
                {content.es}
            </a>
            <a href="{base}/" class={$page.params.lang !== 'es' ? 'active' : ''}>
                {content.en}
            </a>
        </div>
        {#if !titleLeft}
            <h1 class="truncate">{content.title}</h1>
            <h2 class="truncate">{content.subtitle}</h2>
        {/if}
    </div>
</header>

<style>
    .truncate {

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .left-text {
        max-height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-inline: 32px;
    }
    .mini-h1, .mini-h2, .hero-header, .hero-subheader {
        margin: 0;
        padding: 0;
    }
    .mini-h1, .mini-h2 , .hero-subheader{
        font-size: 1rem;
        line-height: 1rem;
    }
    .hero-header {
        font-weight: 900;
        font-size: 32px;
        line-height: 32px;
    }
    header {
        /* position: fixed; */
        flex-basis: 75px;
        height: 75px;
        /* top: 0; */
        /* left: 0; */
        /* right: 0; */
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
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
    }
    .change-lang {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
        z-index: 40;
    }
    .change-lang a {
        background: rgb(var(--bg-color-1));
        background: rgb(var(--fg-color-1));
        text-align: center;
        width: 75px;
        color: inherit;
        font-family: 'styrene';
        text-decoration: none;
        background: none;
        padding: 2px;
    }
    .change-lang a.active {
        border: 1px solid rgb(var(--midnight));
    }
    .change-lang a:not(.active) {
        border: 1px solid transparent;
    }
</style>
