<script>
import {height, width} from '$lib'
</script>

<svelte:window bind:innerHeight={$height} bind:innerWidth={$width} />

<slot />
