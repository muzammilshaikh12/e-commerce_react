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
        <a href="https://github.com/muzammilshaikh12" className='anchor'>
          <img
            src="https://www.bing.com/th?id=OIP.ckeUFk-yid0vfWnd56w7wAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="GitHub"
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://www.linkedin.com/in/muzammil-shaikh-90b278184/" className='anchor'>
          <img
            src="https://www.bing.com/th?id=OIP.X-3PgW1kZj3OFpeSAXjxuwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="LinkedIn"
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
