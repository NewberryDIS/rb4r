<script>
    import allContent from '$lib/content.json'
    import {slugify}  from '$lib'
</script>
<ul style="list-style-type: none; background-color: #333; color: #ccc;">
{#each allContent.tiles as sm}
        <li><a href="./{slugify( sm.en.country )}"  style="color: inherit;">{sm.en.country}</a></li>
    {/each}
</ul>
