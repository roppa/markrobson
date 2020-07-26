<script>
  import ContactWidget from "./ContactWidget.svelte";
</script>

<div class="spacer-2x">&nbsp;</div>

<div class="footer-widgets">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 text-center">
        <div class="widget">
          <img src="images/logo-icon.svg" alt="logo" class="footer-logo" />
          <p class="mb-3">
            <a href="https://www.buymeacoffee.com/JuWxHBA" target="_blank">
              Buy me a coffee?
            </a>
            Or
            <a href="https://ko-fi.com/markrobson" target="_blank">
              buy me a Kofi?
            </a>
          </p>
        </div>
      </div>

      <ContactWidget />

    </div>

  </div>

</div>

<footer class="bg-white">
  <div class="container-fluid text-center">
    <p>&copy; 2020 Mark Robson</p>
  </div>
</footer>
