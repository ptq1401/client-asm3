import classes from "./Categori.module.css";
import ProductType from "./ProductType";
//-----------------------------------------------------------
function Categori() {
  return (
    <div className={classes.categori}>
      <h2>CATEGORIES</h2>
      <p>APPLE</p>
      <ProductType mode="All">All</ProductType>
      <p>IPHONE & MAC</p>
      <ProductType mode="Iphone">IPhone</ProductType>
      <ProductType mode="Ipad">IPad</ProductType>
      <ProductType mode="Macbook">MacBook</ProductType>
      <p>WIRELESS</p>
      <ProductType mode="Airpod">AirPod</ProductType>
      <ProductType mode="Watch">Watch</ProductType>
      <p>OTHER</p>
      <ProductType mode="Mouse">Mouse</ProductType>
      <ProductType mode="Keyboard">KeyBoard</ProductType>
      <ProductType mode="Other">Other</ProductType>
    </div>
  );
}
//--------------------------------------------------------------
export default Categori;
