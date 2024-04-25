import classes from "./Review.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//--------------------------------------------------------
function Review({ product }) {
  //---hooks----
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);
  const login = useSelector((state) => state.login.login);
  const navigate = useNavigate();
  //----------handle click button-----------
  // giới hạn số lượng từ 1-10
  const enterquantity = (e) => {
    if (e.target.value > 10) {
      setError(true);
      setQuantity(10);
      return;
    } else if (e.target.value < 1 && e.target.value !== "") {
      setError(true);
      setQuantity(1);
      return;
    }
    setQuantity(e.target.value);
    setError(false);
  };
  const decrease = () => {
    if (quantity === 1) {
      setError(true);
      return;
    }
    setQuantity((prev) => prev - 1);
    setError(false);
  };
  const increase = () => {
    if (quantity === 10) {
      setError(true);
      return;
    }
    setQuantity((prev) => Number(prev) + 1);
    setError(false);
  };
  //add prodcut
  const addProductToCart = () => {
    const data = { _id: product._id, quantity: quantity };
    fetch("https://server-asm3-e5pk.onrender.com/add-to-cart", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((inform) => {
        if (inform.errorService) {
          navigate("/error");
        } else alert("Product added to cart");
      });
  };
  //---------
  return (
    <div className={classes.review}>
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      <p>{product.short_desc}</p>
      <p>
        CATEGORY: <span>{product.category}</span>
      </p>
      {login && (
        <div className={classes.quantity}>
          <p>QUANTITY</p>
          <button onClick={decrease}>
            <i class="fas fa-caret-left"></i>
          </button>
          <input
            type="number"
            value={quantity}
            onChange={enterquantity}
          ></input>
          <button onClick={increase}>
            <i class="fas fa-caret-right"></i>
          </button>
          <button className={classes["add-button"]} onClick={addProductToCart}>
            Add to cart
          </button>
        </div>
      )}
      {!login && <h3>Login to Add Product to Cart</h3>}
      {error && <p>The number of products allowed is 1 to 10</p>}
    </div>
  );
}
//--------------------------------------------------------
export default Review;
