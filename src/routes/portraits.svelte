<script>
  import Gallery from "../components/Gallery/Gallery.svelte";
</script>

<style>
  form img {
    width: auto;
  }
</style>

<svelte:head>
  <title>Portraits</title>
</svelte:head>

<section id="about" class="bg-white">
  <div class="container">
    <div class="row vcenter">
      <div class="col-md-12 mb-3">
        <h4 class="section-title mb-0">PORTRAITS</h4>
        <div class="spacer spacer-line border-primary ml-0">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
        <p class="lead">
          I'm focussing on portraiture with oils using the traditional alla
          prima method.
        </p>
        <p>
          Unfortunately I can't do live sittings so the portraits will need to
          be based on one or more photographs. When choosing the photographs,
          try and go for ones that captures the essense of you. Photographs that
          have some degree of contrast (shadows) and that have vibrant colour
          are the best.
        </p>
        <p>Ordering is easy, just follow these steps:</p>
        <ol>
          <li>select the photo or photos that you would like me to use</li>
          <li>
            send me your photo(s), with a message containing any ideas you have
            for background, colouring, clothing etc
          </li>
          <li>decide on the size you would like</li>
          <li>I'll notify you that I've started work, or with any queries</li>
          <li>once painted I'll send you a photo for your approval</li>
          <li>
            once approved, painting will dry and be varnished (2-3 weeks in
            total)
          </li>
          <li>your portrait will be dispatched</li>
        </ol>

        <p>Cost is £200 + £5 P&amp;P</p>

        <form
          style="display: inline-block;"
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input
            type="hidden"
            name="encrypted"
            value="-----BEGIN
            PKCS7-----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-----END
            PKCS7-----" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif"
            border="0"
            name="submit"
            alt="PayPal – The safer, easier way to pay online!" />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
            width="1"
            height="1" />
        </form>

      </div>

    </div>

    <Gallery images={'portraits'} />

  </div>

</section>
