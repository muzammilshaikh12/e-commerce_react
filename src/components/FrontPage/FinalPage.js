import { Fragment } from "react";

import Header from "./header";

import Summary from "./Summary";

import Products from "./Products";

import Footer from './footer'

const FrontPage = (props) => {
  return (
    <Fragment>
      <Header cartFunc={props.cartFunc}/>
      <Summary />
      <Products/>
      <Footer />
    </Fragment>
  );
};

export default FrontPage;
