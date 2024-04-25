import classes from "./Banner.module.css";
import { useNavigate } from "react-router-dom";
//----------------------component--------------------
function Banner() {
  const navigate = useNavigate();
  const ClickHandle = () => {
    navigate("/shop?mode=All");
  };
  return (
    <div className={classes.banner}>
      <div className={classes.para}>
        <p>NEW INSPIRATION 2020</p>
        <p>20% off on new season</p>
        <button onClick={ClickHandle}>Browse Collections</button>
      </div>
    </div>
  );
}
//----------------export--------------------------
export default Banner;
