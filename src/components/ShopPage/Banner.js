import classes from "./Banner.module.css";
//---------------------------------------------
function Banner({ page }) {
  return (
    <div className={classes.banner}>
      <p>{page}</p>
      <p>{page}</p>
    </div>
  );
}
//--------------------------------------------
export default Banner;
