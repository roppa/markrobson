<script>
  export let segment;

  function toggle() {
    document.getElementById(this.dataset.target).classList.toggle("show");
    this.classList.toggle("collapsed");
  }
</script>

<nav
  class="navbar navbar-expand-lg navbar-light bg-white custom-menu split-menu">
  <div class="container">
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="navbar-toggle-1"
      aria-controls="navbar-toggle-1"
      aria-expanded="false"
      aria-label="Toggle navigation"
      on:click={toggle}>
      <span class="icon-bar top-bar" />
      <span class="icon-bar middle-bar" />
      <span class="icon-bar bottom-bar" />
      <span class="sr-only">Toggle navigation</span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-toggle-1">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            href="."
            aria-current={segment === undefined ? 'page' : undefined}
            class="nav-link first-menu-item {!segment ? 'active' : ''}">
            home
          </a>
        </li>

        <li class="nav-item">
          <a
            href="about"
            aria-current={segment === 'about' ? 'page' : undefined}
            class="nav-link {segment === 'about' ? 'active' : ''}">
            about
          </a>
        </li>

        <li class="nav-item">
          <a
            href="blog"
            aria-current={segment === 'blog' ? 'page' : undefined}
            class="nav-link {segment === 'blog' ? 'active' : ''}">
            blog
          </a>
        </li>

        <li class="nav-item">
          <a
            aria-current={segment === 'contact' ? 'page' : undefined}
            href="contact"
            class="nav-link before-count {segment === 'contact' ? 'active' : undefined}">
            contact
          </a>
        </li>

        <li class="nav-item dropdown">
          <span
            class="nav-link dropdown-toggle"
            id="category-link"
            data-toggle="category-dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Categories
          </span>
          <div
            class="dropdown-menu drop-to-right animated fadeIn fast"
            id="category-dropdown"
            aria-labelledby="category-link">
            <a class="dropdown-item" href=".">Print</a>
            <a class="dropdown-item" href=".">Digital</a>
            <a class="dropdown-item" href=".">Photography</a>
          </div>
        </li>

      </ul>

    </div>

    <a class="navbar-brand m-auto" href=".">
      <img src="images/logo-icon.svg" alt="" />
    </a>

  </div>
</nav>
