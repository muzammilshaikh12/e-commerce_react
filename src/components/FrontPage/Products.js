import "./Products.css";

import ProductList from "./productList";

const Products = (props) => {
  const products = props.productarray.map((product) => {
    return <ProductList products={product}/>
  });

  return <div>{products}</div>
};

export default Products;
