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
