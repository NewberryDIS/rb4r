<script>
	export let activeValue;
</script>

<svg>
	<rect class="btn" x="0" y="0" width="1000" height="1000" on:click={() => activeValue++} />
</svg>

<style>
	rect.btn {
		stroke: #000;
		fill: #000;
		/* fill-opacity: 0;
		stroke-opacity: 0; */
	}
</style>
