import classes from "./Information.module.css";
//---------------------------------------------------
function Information() {
  return (
    <div className={classes.infor}>
      <div className={classes.service}>
        <div className={classes.freeship}>
          <p>FREE SHIPPING</p>
          <p>Free Shipping Worlwide</p>
        </div>
        <div className={classes.freeship}>
          <p>24 X 7 SERVICE</p>
          <p>Free Shipping Worlwide</p>
        </div>
        <div className={classes.freeship}>
          <p>FESTIVAL OFFER</p>
          <p>Free Shipping Worlwide</p>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.freeship}>
          <p>LET'S BE FRIENDS!</p>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <form>
          <input type="text" placeholder="  Enter your email address"></input>
          <button type="button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
//--------------------------------------------------
export default Information;
