<script>
  import Nav from "../components/Nav.svelte";
  import TopMenu from "../components/TopMenu.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

<style lang="scss">
  @import "../styles/style.scss";
</style>

<TopMenu />
<Nav {segment} />

<button on:click={() => console.log('this is a test')}>
  hijkadskfaksdjf askdjfasdklfjasd;lkfj
</button>

<main>
  <slot />
</main>

<Footer />
