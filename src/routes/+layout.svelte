<script>
    import Dims from '$comps/dims.svelte'
import {height, width} from '$lib'
</script>
<!-- <Dims /> -->
<svelte:window bind:innerHeight={$height} bind:innerWidth={$width} />

<slot />
