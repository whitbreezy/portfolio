import { useState } from 'react';
import { Row } from 'react-bootstrap';
//helpers and some of the form code borrowed/modified from bootcamp module 20 activity 16

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email or name
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
        }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleFormSubmit}>
        <Row>
          <label htmlFor="emailInput" className='form-label p-0'>Enter Email Address</label>
          <input 
            className='form-control mb-3'
            id='emailInput'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </Row>
        <Row>
          <label htmlFor="nameInput" className='form-label p-0'>Enter Email Address</label>
          <input
            className='form-control mb-3'
            id='nameInput'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="First and Last Name"
          />
        </Row>
        <Row>
          <a href='mailto:whitneybrady20@gmail.com' className='p-0'>
            <button className='m-0' type="submit">Submit</button>
          </a>
        </Row>
      </form>
      {errorMessage && (
        <div>
          <p className="alert alert-danger my-3">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
