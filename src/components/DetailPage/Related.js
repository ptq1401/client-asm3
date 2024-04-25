import classes from "./Related.module.css";
import ProductItem from "../ShopPage/ProductItem"; //dùng lại component tử ShopPage
//----------------------------------------
function Related({ data }) {
  return (
    <div className={classes.related}>
      <h3>RELATED PRODUCTS</h3>

      {data.length === 0 ? (
        <p>No Related Products</p>
      ) : (
        <div className={classes["grid-related"]}>
          {data.map((cur, i) => (
            <ProductItem product={cur} key={i}></ProductItem>
          ))}
        </div>
      )}
    </div>
  );
}
//-----------------------------------------
export default Related;
