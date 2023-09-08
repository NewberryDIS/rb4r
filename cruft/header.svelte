<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
    export let content;
    let titleLeft = true;
    import { width, height } from "$lib";
    // titleLeft = false
    $: lang = $page.params.lang || "en";
</script>

<header>
    <div class="header-left">
        <img
            src="{base}/NLogo.png"
            height="64"
            width="64"
            alt={content.logoalt}
        />
        <div class="left-text">
            <h1 class="maxi-h1 truncate">{content.title}</h1>
            <br />
            <span class="truncate hero-subheader">{content.subtitle}</span>
        </div>
    </div>
    <div class="header-right">
        <div class="change-lang">
            <a href="{base}/es" class={lang === "es" ? "active" : ""}>
                {content.es}
            </a>
            <a href="{base}/" class={lang !== "es" ? "active" : ""}>
                {content.en}
            </a>
            <a href="{base}/{lang ? 'es/' : ''}credits">
                {lang === "es" ? "credits" : "Credits"}
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
        overflow-x: hidden;
        overflow-y: visible;
        text-overflow: ellipsis;
    }
    .left-text {
        max-height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        margin-inline: 32px;
    }
    .maxi-h1,
    .maxi-h2,
    .hero-header,
    .hero-subheader {
        margin: 0;
        padding: 0;
    }
    .mini-h1,
    .mini-h2,
    .hero-subheader {
        display: inline;
        font-size: 1rem;
        line-height: 1rem;
    }
    .maxi-h1 {
        font-weight: 900;
        font-size: 32px;
        line-height: 33px;
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
        font-family: "styrene";
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
