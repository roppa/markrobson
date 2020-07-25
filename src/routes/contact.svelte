<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="container">
  <header class="contact-header parallax">
    <div class="header-content dark text-center">
      <h1 class="header-title mb-0">CONTACT</h1>
      <p class="inner-space mb-0">Get in touch with me</p>
    </div>
  </header>
</div>

<div class="spacer-2x">&nbsp;</div>

<section id="contact-info">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="contact-box inner-space text-center">
          <i class="fas fa-mobile-alt contact-icon mb-3" />
          <h5 class="box-title">PHONE</h5>
          <p class="box-description">
            <a href="tel:+4429830767">+44 7729830767</a>
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-box inner-space text-center">
          <i class="fas fa-map-marked-alt contact-icon mb-3" />
          <h5 class="box-title">LOCATION</h5>
          <p class="box-description">London, UK</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-box inner-space text-center">
          <i class="far fa-envelope contact-icon mb-3" />
          <h5 class="box-title">EMAIL</h5>
          <p class="box-description">
            <a href="mailto:mark.o.robson@gmail.com">mark.o.robson@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="spacer-2x">&nbsp;</div>

<section id="contact" class="bg-white">
  <div class="container w50">
    <h2 class="section-title text-center mb-0">GET IN TOUCH</h2>
    <div class="spacer">&nbsp;</div>
    <form id="contactForm" data-toggle="validator">
      <div class="row">
        <div class="col-md-6 sub-col-left">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="*Name"
              required />
            <div class="help-block with-errors" />
          </div>
        </div>
        <div class="col-md-6 sub-col-right">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="*Email"
              required />
            <div class="help-block with-errors" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="subject"
              placeholder="Subject" />
            <div class="help-block with-errors" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              id="message"
              class="form-control"
              rows="5"
              placeholder="*Message"
              required />
            <div class="help-block with-errors text-area" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          id="form-submit"
          class="btn btn-submit btn-primary rectangle">
          <span>SEND MESSAGE</span>
        </button>
        <div id="msgSubmit" class="h3 text-center hidden" />
        <div class="clearfix" />
      </div>
    </form>
  </div>
</section>
