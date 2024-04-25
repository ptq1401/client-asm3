import classes from "./ButtonCategori.module.css";
import { Link } from "react-router-dom";
//----------------------------------------
function ButtonCategori({ url }) {
  return (
    <Link to="/shop?mode=All" className={classes.button}>
      <img src={url} alt="Logo" className={classes.image} />
    </Link>
  );
}
export default ButtonCategori;
