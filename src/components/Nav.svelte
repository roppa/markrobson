<script>
  export let segment;
</script>

<style lang="scss">
  @import "../styles/style.scss";
</style>

<nav
  class="navbar navbar-expand-lg navbar-light bg-white custom-menu split-menu">
  <div class="container">
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-toggle-1"
      aria-controls="navbar-toggle-1"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="icon-bar top-bar" />
      <span class="icon-bar middle-bar" />
      <span class="icon-bar bottom-bar" />
      <span class="sr-only">Toggle navigation</span>
    </button>

    <a class="navbar-brand mobile-brand m-auto" href="#">
      <img src="images/logo-icon.png" alt="" />
    </a>

    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-toggle-2"
      aria-controls="navbar-toggle-2"
      aria-expanded="false"
      aria-label="Toggle navigation">
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
            class="nav-link first-menu-item">
            home
          </a>
        </li>

        <li class="nav-item">
          <a
            href="about"
            aria-current={segment === 'about' ? 'page' : undefined}
            class="nav-link">
            about
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="dropdown2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Categories
          </a>
          <div
            class="dropdown-menu drop-to-right animated fadeIn fast"
            aria-labelledby="dropdown2">
            <a class="dropdown-item" href="#">Framed</a>
            <a class="dropdown-item" href="#">Print</a>
            <a class="dropdown-item" href="#">Digital</a>
            <a class="dropdown-item" href="#">Photography</a>
          </div>
        </li>

      </ul>

    </div>

    <a class="navbar-brand m-auto" href="#">
      <img src="images/logo-icon.png" alt="" />
    </a>

    <div class="collapse navbar-collapse" id="navbar-toggle-2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a
            aria-current={segment === 'contact' ? 'page' : undefined}
            href="contact"
            class="nav-link before-count {segment === 'contact' ? 'active' : undefined}">
            contact
          </a>
        </li>
        <li class="nav-item dropdown extra-dropdowns">
          <a
            class="nav-link last-menu-item has-dropdown-toggle dropdown-toggle"
            id="dropdown3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Shopping Cart
            <span class="count count-primary">2</span>
          </a>
          <div
            class="dropdown-menu animated fadeIn fast"
            aria-labelledby="dropdown3">
            <div class="cart-small">
              <img src="images/product-small1.jpg" alt="" />
              <p>
                <a href="." class="text-black">Amazing Framed Art</a>
                <br />
                <span>1 x $29.99</span>
              </p>
              <a href=".">
                <i class="md-icon dp14 close-icon">close</i>
              </a>
            </div>
            <div class="cart-small">
              <img src="images/product-small2.jpg" alt="" />
              <p>
                <a href="." class="text-black">Printed Photography</a>
                <br />
                <span>1 x $14.99</span>
              </p>
              <a href=".">
                <i class="md-icon dp14 close-icon">close</i>
              </a>
            </div>
            <p class="text-left cart-small-total">
              <b>Subtotal: $44.98</b>
            </p>
            <div class="cart-small-footer text-center">
              <div class="row">
                <div class="col-sm-6">
                  <a href="shopping-cart.html" class="mini-cart-btn">
                    <i class="md-icon dp12 mr-1">shopping_cart</i>
                    <span class="va-middle">
                      <b>VIEW CART</b>
                    </span>
                  </a>
                </div>
                <div class="col-sm-6">
                  <a href="checkout.html" class="mini-cart-btn mb-0">
                    <i class="md-icon dp12 mr-1">exit_to_app</i>
                    <span class="va-middle">
                      <b>CHECKOUT</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
