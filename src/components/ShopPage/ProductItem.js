import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
//---------------------------------------------------------
function ProductItem({ product }) {
  //------------
  return (
    <Link className={classes.product} to={`/detail/${product._id}`}>
      <img src={product.img3} alt={product.name} className={classes.image} />
      <p>{product.name}</p>
      <p>$ {product.price} VND</p>
    </Link>
  );
}
export default ProductItem;
