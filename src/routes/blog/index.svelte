<script context="module">
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
                  <i class="far fa-bookmark text-primary ml-3 mr-1" />
                  PAINTING
                  <i class="far fa-clock text-primary ml-3 mr-1" />
                  30 AUG 2018
                </p>
              </div>
              <h4 class="post-title">
                <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
              </h4>
              <p class="mb-3">{post.intro}</p>
              <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
              <p class="comments-info text-sm mt-1 mb-2">
                <i class="far fa-comment text-primary mr-1" />
                (1) COMMENT
              </p>
            </div>
          </div>

          <div class="spacer">&nbsp;</div>
        {/each}

      </div>

      <div class="col-md-4 blog-sidebar mt-3">
        <div class="sidebar-widget">
          <div class="about-widget">
            <h4 class="widget-title text-center">ABOUT ME</h4>
            <div class="about-image text-center">
              <img src="images/creator.jpg" alt="" />
            </div>
            <p class="text-center">
              Quisque tincidunt sodales ante, nec porttitor sem pharetra vitae.
              Nullam quis dui sit amet lectus facilisis iaculis pulvinar.
            </p>
          </div>
        </div>

        <div class="sidebar-widget">
          <h4 class="widget-title text-center">RECENT POSTS</h4>
          <div class="spacer">&nbsp;</div>
          <div class="post-widget">
            <ul class="list-unstyled">
              <li>
                <div class="recent-posts first">
                  <div class="recent-post-image">
                    <img src="images/blog-post.jpg" alt="" />
                  </div>
                  <div class="recent-post-content">
                    <a href="single-post.html" class="recent-post-title">
                      TRAVELING
                    </a>
                    <p class="text-sm mb-2">Travel</p>
                    <p class="text-sm opc-75">
                      <i class="far fa-clock" />
                      01 SEP 2018
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="recent-posts pt-2">
                  <div class="recent-post-image">
                    <img src="images/blog-post2.jpg" alt="" />
                  </div>
                  <div class="recent-post-content">
                    <a href="single-post.html" class="recent-post-title">
                      PHOTOSHOOT
                    </a>
                    <p class="text-sm mb-2">PAINTING</p>
                    <p class="text-sm opc-75">
                      <i class="far fa-clock" />
                      31 AUG 2018
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebar-widget">
          <h4 class="widget-title text-center pb-3">NEWSLETTER</h4>
          <p class="text-center">
            Subscribe to our newsletter to get notified about new posts,
            informations and updates.
          </p>
          <div class="input-group mt-3">
            <input
              type="text"
              class="form-control border-faded"
              placeholder="Email Address" />
            <span class="input-group-btn">
              <a href="#x" class="btn btn-w-icon btn-primary ml-2">
                <span>
                  <i class="fas fa-paper-plane" />
                </span>
              </a>
            </span>
          </div>
        </div>

        <div class="sidebar-widget">
          <h4 class="widget-title text-center pb-2">TAGS</h4>
          <div class="tag-cloud">
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">#design</a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">
              #PAINTING
            </a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">
              #videography
            </a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">
              #paintings
            </a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">#photo</a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">#art</a>
            <a href="#x" class="btn btn-sm btn-black rectangle mt-1">#travel</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
