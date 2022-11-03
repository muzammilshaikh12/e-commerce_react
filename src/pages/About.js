import React, { Fragment } from "react";

import './About.css'

const About = () => {
  return (
    <Fragment>
      <div className="subHeader">
        <h1>The Biker Zone</h1>
      </div>
      <h3 className="about">About</h3>
      <div className="pic">
        <img
          src="https://th.bing.com/th/id/OIP.ltMMAqdQq8bVm_umpGrUOQHaD4?w=326&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="The Biker Zone"
        />
      </div>
      <div className="para">
        <p>
          Soon after the origination of the biker movement, motorcycle riders
          earned an extremely negative reputation. It all started with an
          incident in July 1947 in the city of Hollister, California, which the
          media later named the “Hollister riot.” It is not known exactly
          whether the riot really took place. All we know for sure that from
          July 4 to July 6 Hollister hosted a motorcycle rally, which was
          attended by several thousand people.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
