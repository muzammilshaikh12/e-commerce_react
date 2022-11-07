import React, { Fragment } from "react";

import "./ContactUs.css";

const ContactUs = (props) => {
  const readInputs = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let number = event.target.number.value;

    let obj = {
      name: name,
      email: email,
      number: number,
    };
    props.contactDetails(obj);

    event.target.name.value = null;
    event.target.email.value = null;
    event.target.number.value = null;
  };

  return (
    <Fragment>
      <form className="cntform" onSubmit={readInputs}>
        <h3>Fill out your details</h3>
        <div className="name">
          <label htmlFor="name" className="label">
            Name:{" "}
          </label>
          <input type="text" name="name" className="input" required/>
        </div>
        <div className="email">
          <label htmlFor="email" className="label">
            E-mail:{" "}
          </label>
          <input type="email" name="email" className="input" required/>
        </div>
        <div className="number">
          <label htmlFor="number" className="label">
            Contact No:{" "}
          </label>
          <input type="number" name="number" className="input" required/>
        </div>
        <div>
          <button type="submit" className="cntbtn">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactUs;
