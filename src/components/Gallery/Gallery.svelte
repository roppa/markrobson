<script>
  import home from "./images";
  import portraits from "./portraits";
  const galleryImages = {
    home,
    portraits,
  };
  export let images;
</script>

<style>
  ul {
    align-items: center;
  }
</style>

<section id="gallery" class="p-0 line-effect">
  <div class="container full-width">
    <h3 class="section-title hidden">GALLERY</h3>
    <ul class="row gallery line-effect list-unstyled mb-0">

      {#each galleryImages[images] as image}
        <li class="col-md-6 col-lg-4 gallery">
          <figure class="gallery-item effect-bubba">
            <img src={image.url} alt={image.alt} />
            <figcaption>
              <div class="hover-content">
                <h2 class="hover-title text-center text-white">
                  {image.title}
                </h2>
                <p class="gallery-info text-center text-white">
                  {image.description}
                </p>
              </div>
            </figcaption>
          </figure>
        </li>
      {/each}

    </ul>

  </div>

</section>
