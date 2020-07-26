<script context="module">
  import AboutMe from "../../components/AboutMe.svelte";
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <header class="about-header parallax">
    <div class="header-content dark text-center">
      <h1 class="header-title mb-0">BLOG</h1>
      <p class="inner-space mb-0">Read about what really matters!</p>
    </div>
  </header>
</div>

<div class="spacer-2x">&nbsp;</div>

<section id="posts">
  <div class="container">
    <div class="row">
      <div class="col-md-8 blog-content">
        {#each posts as post}
          <div class="blog block">
            <div class="post-content">
              <div class="post-meta">
                <p class="text-sm">
                  <i class="far fa-user text-primary mr-1" />
                  Mark
                  <i class="far fa-clock text-primary ml-3 mr-1" />
                  {post.publishDate}
                </p>
              </div>
              <h4 class="post-title">
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
              </h4>
              <p class="mb-3">{post.intro}</p>
              <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
            </div>
          </div>

          <div class="spacer">&nbsp;</div>
        {/each}

      </div>

      <div class="col-md-4 blog-sidebar mt-3">
        <AboutMe />
      </div>
    </div>
  </div>
</section>
