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

        <div id="share-post" class="text-center bg-white">
          <a href="#x" class="btn-social btn-facebook m-1 rectangle">
            <i class="fab fa-facebook-f" />
            <span>Share - 93.3K</span>
          </a>
          <a href="#x" class="btn-social btn-twitter m-1 rectangle">
            <i class="fab fa-twitter" />
            <span>Tweet - 17.5K</span>
          </a>
          <a href="#x" class="btn-social btn-google m-1 rectangle">
            <i class="fab fa-google-plus-g" />
            <span>Share - 7.9K</span>
          </a>
          <a href="#x" class="btn-social btn-pinterest m-1 rectangle">
            <i class="fab fa-pinterest" />
            <span>Pin It - 7.7K</span>
          </a>
        </div>

        <div class="spacer">&nbsp;</div>

        <div id="comments" class="comments">
          <div class="container" />
        </div>

      </div>

      <div class="col-md-4 blog-sidebar mt-3">
        <AboutMe />

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
                    <p class="text-sm mb-2">Photography</p>
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
              #photography
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
