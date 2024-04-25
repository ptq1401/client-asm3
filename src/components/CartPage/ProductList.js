import classes from "./ProductList.module.css";
import { useNavigate } from "react-router-dom";
//-------------------------------------------
function ProductList({ list, cartId }) {
  const navigate = useNavigate();
  //--------button handle-------------
  const DeleteHandle = (prodId) => {
    if (!window.confirm("Do you really want to delete Product?")) {
      return;
    }
    fetch("https://server-asm3-e5pk.onrender.com/remove-product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ prodId: prodId, cartId: cartId }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data.errorService) {
          window.location.reload();
        } else navigate("/error");
      })
      .catch((err) => console.log(err));
  };
  //---------------------------------
  return list.length === 0 ? (
    <p>No Products</p>
  ) : (
    <>
      {list.map((cur, i) => (
        <div className={classes.product} key={i}>
          <img src={cur.product_id.img4} alt="product" />
          <p className={classes.name}>{cur.product_id.name}</p>
          <p className={classes.price}>
            {convert(String(cur.product_id.price))} $
          </p>
          <div className={classes.quantity}>
            <p>{cur.quantity}</p>
          </div>
          <p className={classes.price}>
            {convert(String(cur.product_id.price * cur.quantity))} $
          </p>
          <button
            onClick={() => {
              DeleteHandle(cur.product_id._id);
            }}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
    </>
  );
}
//-----------------------------------
export default ProductList;
//----------convert number to string-------
export function convert(number) {
  let i = number.length;
  let counter = 0;
  let price = "";
  while (i--) {
    price = number.charAt(i) + price;
    counter++;
    if (counter === 3 && i !== 0) {
      price = "." + price;
      counter = 0;
    }
  }
  return price;
}
