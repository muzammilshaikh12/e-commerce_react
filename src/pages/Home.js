import React, { Fragment } from "react";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="subHeader">
        <h1>The Biker Zone</h1>
      </div>
      <div className="col-btn">
        <button className="latest-album">Check Our Latest Bike Collection</button>
      </div>
      <h3 className="bike">Road Shows</h3>
      <div>
        <ul>
          <div className="venue">
            <h4 className="details">SEP 21</h4>
            <h4 className="details">Pune, India</h4>
            <h4 className="details">Sahara Stadium</h4>
            <button className="details mybutton">Get Tickets</button>
          </div>
          <hr className="hr" />
          <div className="venue">
            <h4 className="details">SEP 26</h4>
            <h4 className="details">Goa, India</h4>
            <h4 className="details">Main Bridge</h4>
            <button className="details mybutton">Get Tickets</button>
          </div>
          <hr className="hr" />
          <div className="venue">
            <h4 className="details">SEP 31</h4>
            <h4 className="details">Capetown, RSA</h4>
            <h4 className="details">Ground de Capetown</h4>
            <button className="details mybutton">Get Tickets</button>
          </div>
          <hr className="hr" />
          <div className="venue">
            <h4 className="details">Oct 05</h4>
            <h4 className="details">California, USA</h4>
            <h4 className="details">The Grand Stadium</h4>
            <button className="details mybutton">Get Tickets</button>
          </div>
          <hr className="hr" />
          <div className="venue">
            <h4 className="details">Oct 11</h4>
            <h4 className="details">Tokio, Japan</h4>
            <h4 className="details">Japanase Mall Ground</h4>
            <button className="details mybutton">Get Tickets</button>
          </div>
          <hr className="hr" />
        </ul>
      </div>
    </Fragment>
  );
};

export default Home
