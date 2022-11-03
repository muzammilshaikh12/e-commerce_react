import { Fragment } from "react";

import Summary from "./Summary";

import Products from "./Products";

const FrontPage = (props) => {
  return (
    <Fragment>
      <Summary />
      <Products />
    </Fragment>
  );
};

export default FrontPage;
