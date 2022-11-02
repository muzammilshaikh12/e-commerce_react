import React from "react";

import FrontPage from "./components/FrontPage/FinalPage";

function App() {
  const Products = [{
    title: 'Yamaha R15 V2',
    price: 6500,
    imgsrc:'https://th.bing.com/th/id/OIP.qfJnfHY-eLAcfVPB8FNuQAHaEl?w=268&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    title: 'Kawasaki Ninja H2',
    price: 8500,
    imgsrc:'https://th.bing.com/th/id/OIP.UfJtQYOWXz4bKbeESgQyKwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    title: 'Triumph Tiger',
    price: 9500,
    imgsrc:'https://th.bing.com/th/id/OIP.8DHpTFV4QvNEg8mLTRjqdAHaE1?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  {
    title: 'Honda CBR 1000SR',
    price: 10500,
    imgsrc:'https://th.bing.com/th/id/OIP.tNNiwXduGeGz-hRlZfLj6QHaEH?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  }
]
  return (
    <div>
      <FrontPage products={Products}/>
    </div>
  );
}

export default App;
