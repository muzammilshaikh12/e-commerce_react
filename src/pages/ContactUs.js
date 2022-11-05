import React, { Fragment } from "react";

import "./ContactUs.css";

const ContactUs = (props) => {
  const readInputs = (event) => {
    event.preventDefault();
    let obj = {
      name: event.target.name.value,
      email: event.target.email.value,
      number: event.target.number.value,
    };

    props.contactDetails(obj);

 
  };
  
  return (
    <Fragment>
      <form className="cntform" onSubmit={readInputs}>
        <h3>Fill out your details</h3>
        <div className="name">
          <label htmlFor="name" className="label">
            Name:{" "}
          </label>
          <input type="text" name="name"/>
        </div>
        <div className="email">
          <label htmlFor="email" className="label">
            E-mail:{" "}
          </label>
          <input type="email" name="email" />
        </div>
        <div className="number">
          <label htmlFor="number" className="label">
            Contact No:{" "}
          </label>
          <input type="number" name="number"></input>
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
