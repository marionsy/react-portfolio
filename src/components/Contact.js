import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    const isEmail = (email) => /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email);

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
      if (!inputValue) {
        setErrorMessage('Please enter in a name')
      } else {
        setErrorMessage('');
      }
    }

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!inputValue || !isEmail(inputValue)) {
        setErrorMessage('Please enter a valid email')
      } else {
        setErrorMessage('');
      }
    }

    if (inputType === 'message') {
      setMessage(inputValue);
      if (!inputValue) {
        setErrorMessage('Please enter a message')
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

 return (
  <div className="container contact">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card my-5">
          <form className="card-body cardbody-color p-lg-5" id="signup-form">
            <div className="text-center">
              <h2 className="title pb-4">Contact Me</h2>
            </div>
            <div className="mb-3">
            <input
              className="form-control"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="name"
              placeholder="name"
            />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="message"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className="text-center">
              <button type="submit" className="btn btn-color px-5 mb-1 w-100 card-text" onClick={handleFormSubmit}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Contact;