<script>
  import SponsorWidget from "./SponsorWidget.svelte";
  import ContactWidget from "./ContactWidget.svelte";
  import CryptoWidget from "./CryptoWidget.svelte";
  import ShopWidget from "./ShopWidget.svelte";
</script>

<div class="spacer-2x">&nbsp;</div>

<div class="footer-widgets">
  <div class="container">
    <div class="row">
      <SponsorWidget />
      <ShopWidget />
      <CryptoWidget />
      <ContactWidget />
    </div>

  </div>

</div>

<footer class="bg-white">
  <div class="container-fluid text-center">
    <p>&copy; 2020 Mark Robson</p>
  </div>
</footer>
