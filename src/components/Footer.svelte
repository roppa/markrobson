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
          <p class="mb-3">Vivamus sodales eleifend sem eu malesuada nunc.</p>
        </div>

      </div>

      <div class="col-lg-3 text-center">
        <div class="widget">
          <h3 class="widget-title">USEFUL LINKS</h3>
          <ul class="footer-list pl-0 mb-0">
            <li class="mb-3">
              <a href=".">Privacy Policy</a>
            </li>
            <li class="mb-3">
              <a href=".">Terms &amp; Conditions</a>
            </li>
            <li class="mb-3">
              <a href=".">News &amp; Updates</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="col-lg-3 text-center">
        <div class="widget">
          <h3 class="widget-title">CATEGORIES</h3>
          <ul class="footer-list pl-0 mb-0">
            <li class="mb-3">
              <a href=".">Framed</a>
            </li>
            <li class="mb-3">
              <a href=".">Print</a>
            </li>
            <li class="mb-3">
              <a href=".">Digital</a>
            </li>
          </ul>
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
