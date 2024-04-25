import classes from "./ProductType.module.css";
import { Link, useSearchParams } from "react-router-dom";
//-----------------------------------------------------------
function ProductType({ children, mode }) {
  const [params, setParams] = useSearchParams();
  const active = params.get("mode") === mode ? "active" : "none-active";
  return (
    <Link to={`?mode=${mode}`} className={classes[active]}>
      {children}
    </Link>
  );
}
//--------------------------------------------------------------
export default ProductType;
