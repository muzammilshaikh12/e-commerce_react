import './ProductList.css'

const ProductList = (props) => {
  
  return (
    <div className="albums">
      <h3 className="title">{props.products.title}</h3>
      <img className="images" src={props.products.imgsrc} alt={props.products.title} />
      <div className="price">
        <h4 className="amount">${props.products.price}</h4>
        <button className="addcart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductList;
