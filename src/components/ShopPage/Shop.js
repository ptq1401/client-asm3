import ProductList from "./ProductList";
import Categori from "./Categori";
import classes from "./Shop.module.css";
//----------------------------------------------
function Shop() {
  return (
    <div className={classes.shop}>
      <Categori></Categori>
      <ProductList></ProductList>
    </div>
  );
}
//-----------------------------------
export default Shop;
