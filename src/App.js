import React, { useState} from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import FrontPage from "./components/FrontPage/FinalPage";

import Cart from "./components/Cart/Cart";

import CartProvider from "./components/store/CartProvider";

import Header from "./components/FrontPage/header";

import Footer from "./components/FrontPage/footer";

import About from "./pages/About";

import Home from "./pages/Home";

import ContactUs from "./pages/ContactUs";

import ProductDetail from "./pages/ProductDetail";

import Login from "./pages/login";

import AuthContext from "./components/store/AuthContext";
import { useContext } from "react";

function App() {
  const Authctx = useContext(AuthContext)

  const isLoggedIn = Authctx.isLoggedIn

  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };

  const contactedUserDetails = async (userdata) => {
    fetch(
      "https://dummy-react-f2cd7-default-rtdb.firebaseio.com/userDetails.json",
      {
        method: "POST",
        body: JSON.stringify(userdata),
        header: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw new Error(error.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <CartProvider>
      <Header cartFunc={cartShowHandler} />
      {CartisShown && <Cart cartFunc={cartRemoveHandler} />}
      <Switch>
      {isLoggedIn && <Route path="/products" exact>
        <FrontPage />
      </Route>}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/contact">
        <ContactUs contactDetails={contactedUserDetails} />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='*'><Redirect to='/login'/></Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
