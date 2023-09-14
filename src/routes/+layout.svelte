<script>
import {height, width} from '$lib'
</script>
<!-- <Dims /> -->
<svelte:window bind:innerHeight={$height} bind:innerWidth={$width} />

<slot />
