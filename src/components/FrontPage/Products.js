import "./Products.css";

import ProductList from "./productList";

const Products = () => {
  const Products = [
    {
       id:1,
      title: "Yamaha R15 V4",
      price: 6500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.qfJnfHY-eLAcfVPB8FNuQAHaEl?w=268&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    { 
      id:2,
      title: "Kawasaki Ninja H2",
      price: 8500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.UfJtQYOWXz4bKbeESgQyKwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    { 
      id:3,
      title: "Triumph Tiger",
      price: 9500,
      imgsrc:
        "https://th.bing.com/th/id/OIP.8DHpTFV4QvNEg8mLTRjqdAHaE1?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id:4,
      title: "Honda CBR 1000RR",
      price: 10500,
      imgsrc:
        "https://www.bing.com/th?id=OIP.29PT2ot_Bw-9Xa1hXtlaMAHaEK&w=201&h=130&c=2&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    },
  ];
  const products = Products.map((product) => {
    return <ProductList products={product} />;
  });

  return <div>{products}</div>;
};

export default Products;
