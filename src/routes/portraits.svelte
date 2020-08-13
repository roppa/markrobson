<script>
  import Gallery from "../components/Gallery/Gallery.svelte";
</script>

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
      </div>

    </div>

    <Gallery images={'portraits'} />

  </div>

</section>
