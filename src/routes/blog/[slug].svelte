<script context="module">
  import AboutMe from "../../components/AboutMe.svelte";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section id="posts">
  <div class="container">
    <div class="row">
      <div class="col-md-8 blog-content">
        <div class="blog block">
          <div class="post-content">
            <h4>{post.title}</h4>
            <p>{post.intro}</p>
            {@html post.html}
          </div>
        </div>

        <div class="spacer">&nbsp;</div>

        <div class="spacer">&nbsp;</div>

      </div>

      <div class="col-md-4 blog-sidebar mt-3">
        <AboutMe />
      </div>

    </div>

  </div>

</section>
