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
            <h1 class="mini-h1">{content.title}: {content.subtitle}</h1>
            {/if}
            <div class="header-hero">
                <p class="hero-header">{content.hero.header}</p>
                <p class="hero-subheader">{content.hero.subtitle}</p>

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
		<h1>{content.title}</h1>
		<h2>{content.subtitle}</h2>
        {/if}
	</div>
</header>

<style>
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
		position: fixed;
		top: 0;
		height: 75px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3px 32px;
		color: rgb(var(--fg-color-1));
		background: var(--bg-2);
		      background-attachment: fixed;
	}
	.header-left {
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
	}
	.change-lang a {
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
