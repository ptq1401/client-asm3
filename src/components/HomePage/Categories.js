import classes from "./Categories.module.css";
import ButtonCategori from "./ButtonCategori";
//---import image--
import product_1 from "./image/product_1.png";
import product_2 from "./image/product_2.png";
import product_3 from "./image/product_3.png";
import product_4 from "./image/product_4.png";
import product_5 from "./image/product_5.png";
//-------------------------------------------------------
function Categories() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <p>BROUWSE OUR CATEGORIES</p>
      </div>
      <div className={classes["categori-1"]}>
        <ButtonCategori url={product_1}></ButtonCategori>
        <ButtonCategori url={product_2}></ButtonCategori>
      </div>
      <div className={classes["categori-2"]}>
        <ButtonCategori url={product_3}></ButtonCategori>
        <ButtonCategori url={product_4}></ButtonCategori>
        <ButtonCategori url={product_5}></ButtonCategori>
      </div>
    </div>
  );
}
//-----------------------------------------------------
export default Categories;
