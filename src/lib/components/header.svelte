<script>
	import { page } from '$app/stores';
	export let content;
</script>

<header>
	<div class="header-left">
		<a href="https://www.newberry.org/" class="center nolines" target="_blank">
			<img src="/NewberryLogo.png" height="64" width="317" alt={content.logoalt} />
		</a>
	</div>
	<div class="header-right">
		<div class="change-lang">
			<a href="es" class={$page.params.lang === 'es' ? 'active' : ''}>
				{content.es}
			</a>
			<a href="/" class={$page.params.lang !== 'es' ? 'active' : ''}>
				{content.en}
			</a>
		</div>
		<h1>{content.title}</h1>
		<h2>{content.subtitle}</h2>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		height: 75px;
		left: 0;
		right: 0;
		z-index: 999;
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
