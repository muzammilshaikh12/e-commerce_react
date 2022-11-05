import React, { useState } from "react";

import {Route} from 'react-router-dom'

import FrontPage from "./components/FrontPage/FinalPage";

import Cart from "./components/Cart/Cart";

import CartProvider from "./components/store/CartProvider";

import Header from "./components/FrontPage/header";

import Footer from "./components/FrontPage/footer";

import About from "./pages/About";

import Home from "./pages/Home";

import ContactUs from "./pages/ContactUs";

function App() {
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };

  const contactedUserDetails = (userdata) => {
    console.log(userdata)
  }
  return (
    <CartProvider>
      <Header cartFunc={cartShowHandler} />
      <Route path='/store'>
        <FrontPage />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/contact'>
        <ContactUs contactDetails={contactedUserDetails}/>
      </Route>
    {CartisShown && <Cart cartFunc={cartRemoveHandler} />}
      <Footer />
    </CartProvider>
  );
}

export default App;
