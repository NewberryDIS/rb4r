<script>
    import { page }  from '$app/stores'
    
    import { onMount } from 'svelte'
    const storymapOptions = {
        width: 100,
        height: 100,
        default_bg_color: {r: 234, g: 235, b: 231},
        storymap: data.storymapJson
    }
    onMount(() => {
        var storymap = new KLStoryMap.StoryMap('storymap-div', storymapOptions)
        window.onresize = function(event) {
            storymap.updateDisplay(); // this isn't automatic
        }
    })
    $: storymapId = $page.params.id
</script>
<div class="storymap" id="storymap-div" />
