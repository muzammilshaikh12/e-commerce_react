import React, { Fragment } from "react";

import "./footer.css";

const Footer = () => {
  return (
    <Fragment>
      {" "}
      <div className="footer">
      <div className="footer1">
        <h4>
          ©Copyright 2022, The Biker Zone | All Rights Reserved
        </h4>
      </div>
      <div className="footer2">
        <a href="https://www.youtube.com" className='anchor'>
          <img
            src="https://www.bing.com/th?id=OIP.3yLsbW3kJ5zU9-957TR_mQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            alt="Youtube"
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://spotify.com" className='anchor'>
          <img
            src="https://www.bing.com/th?id=OIP.Lrxsd7qE1xlNSo9qczRXHgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            alt="Spotify"
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://facebook.com" className='anchor'>
          <img
            src="https://www.bing.com/th?id=OIP.bOdxtMx_BX8ICFq2szS3HwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            alt="facebook"
            height="25px"
            width="25px"
          />
        </a>
      </div>
      </div>
    </Fragment>
  );
};

export default Footer;
