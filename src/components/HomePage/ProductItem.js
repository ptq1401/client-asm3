import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { popupAction } from "../../store/index";
//---------------------------------------------------------
function ProductItem({ product }) {
  //use hooks
  const dispatch = useDispatch();
  //button handle
  const showHandle = () => {
    dispatch(popupAction.SHOW_POPUP(product));
  };
  return (
    <button className={classes.product} onClick={showHandle}>
      <img src={product.img} alt={product.name} className={classes.image} />
      <p>{product.name}</p>
      <p>$ {product.price}</p>
    </button>
  );
}
export default ProductItem;
