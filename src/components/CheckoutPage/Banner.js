import classes from "./Banner.module.css";
//---------------------------------------------
function Banner() {
  return (
    <div className={classes.banner}>
      <p>CHECKOUT</p>
      <p>
        HOME / CART / <span>CHECKOUT</span>
      </p>
    </div>
  );
}
//--------------------------------------------
export default Banner;
