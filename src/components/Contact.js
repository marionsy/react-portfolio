import React from 'react';

function Contact() {
 return (
  <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card my-5">
        <form className="card-body cardbody-color p-lg-5" id="signup-form">
          <div className="text-center">
            <h2 className="title pb-4">Contact Me</h2>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="username-signup" placeholder="name"/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" id="email-signup" placeholder="email"/>
          </div>
          <div className="mb-3">
            <textarea type="password" className="form-control" id="password-signup" placeholder="message"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-color px-5 mb-5 w-100">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
 )
}

export default Contact;