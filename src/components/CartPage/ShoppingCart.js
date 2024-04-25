import classes from "./ShoppingCart.module.css";
import ProductList from "./ProductList";
import { convert } from "./ProductList";
import { Link } from "react-router-dom";
import { json, useLoaderData } from "react-router-dom";
//----------------------------------------------------------
function ShoppingCart() {
  const data = useLoaderData();
  const list = data.list;
  const total = list.reduce(
    (total, cur) => total + cur.product_id.price * cur.quantity,
    0
  );
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>SHOPPING CART</h2>
      <div className={classes.cart}>
        <div>
          <div className={classes.title}>
            <p>IMAGE</p>
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p>REMOVE</p>
          </div>
          <ProductList list={list} cartId={data.cart_id}></ProductList>
          <div className={classes.nav}>
            <Link to="/shop?mode=All" className={classes.link}>
              <i class="fas fa-long-arrow-alt-left"></i> Continue shopping
            </Link>
            {list.length !== 0 && (
              <Link to="/checkout" className={classes.link}>
                Proceed to checkout <i class="fas fa-long-arrow-alt-right"></i>
              </Link>
            )}
          </div>
        </div>
        <div className={classes.total}>
          <h2 className={classes.heading}>CART TOTAL</h2>
          <div className={classes.subtotal}>
            <p>SUBTOTAL</p>
            <p>{convert(String(total))} $</p>
          </div>
          <div className={classes.div_total}>
            <p>TOTAL</p>
            <p>{convert(String(total))} $</p>
          </div>
          <input type="text" placeholder="Enter your coupon"></input>
          <button>
            <i class="fas fa-gift"></i> Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
}
//---------------------------------------------------
export default ShoppingCart;
export async function loader() {
  const response = await fetch(
    "https://server-asm3-e5pk.onrender.com/get-cart",
    { method: "GET", credentials: "include" }
  );
  if (!response.ok) {
    throw json(
      { message: "Can not fecth detail event" },
      {
        status: 550,
      }
    );
  }
  const data = await response.json();
  return data;
}
