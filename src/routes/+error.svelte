<script>
  import { page } from "$app/stores";
  import "$lib/main.css";
</script>

<div class="the-thing">
  <h1>
    {$page.error.message}
  </h1>
  <div class="biggo">{$page.status}</div>
</div>

<style>
  .biggo {
    position: absolute;
    color: #cccccc33;
    font-size: 50vw;
    font-family: styrene;
  }
  h1 {
    font-size: 15vw;
    font-family: styrene;
  }
  .the-thing {
    background: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-center: center;
    align-items: center;
  }
</style>
