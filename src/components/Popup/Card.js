import classes from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { popupAction } from "../../store/index";
import { useNavigate } from "react-router-dom";
//----------------------------------------
function Card() {
  //use hooks
  const dispatch = useDispatch();
  const data = useSelector((state) => state.popup.data);
  const navigate = useNavigate();
  //------------
  const hideHandle = () => {
    dispatch(popupAction.HIDE_POPUP());
  };
  return (
    <div className={classes.card}>
      <button onClick={hideHandle} className={classes.close}>
        x
      </button>
      <div className={classes.container}>
        <img src={data.img} alt={data.name} />
        <div className={classes.description}>
          <p>{data.name}</p>
          <p>$ {data.price}</p>
          <p>{data.short_desc}</p>
          <button onClick={() => navigate(`/detail/${data._id}`)}>
            <i class="fas fa-shopping-cart"></i> View Detail
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
