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

<main>
  <slot />
</main>

<Footer />
