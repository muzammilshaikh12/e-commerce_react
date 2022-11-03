import React,{useState} from "react";

import FrontPage from "./components/FrontPage/FinalPage";

import Cart from "./components/Cart/Cart";

function App() {
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };
  return (
    <div>
      <FrontPage cartFunc={cartShowHandler}/>
      {CartisShown && <Cart cartFunc={cartRemoveHandler}/>}
    </div>
  );
}

export default App;
