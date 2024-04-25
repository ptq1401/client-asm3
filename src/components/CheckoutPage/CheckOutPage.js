import classes from "./CheckOutPage.module.css";
import Banner from "./Banner";
import { useLoaderData, useNavigate } from "react-router-dom";
import { convert } from "../CartPage/ProductList";
import { useState, useRef } from "react";
//---------------------------------------------
function CheckOutPage() {
  //---hooks---
  const [error, setError] = useState({ error: false, message: "" });
  const form = useRef();
  const navigate = useNavigate();
  const data = useLoaderData();

  //-----
  const list = data.list;
  const cartId = data.cart_id;
  const total = list.reduce(
    (total, cur) => total + cur.product_id.price * cur.quantity,
    0
  );

  //----------------------------------
  const orderHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      phoneNumber: formData.get("phoneNumber"),
      address: formData.get("address"),
      cartId: cartId,
      total: total,
    };

    fetch("https://server-asm3-e5pk.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.errorService) {
          navigate("/error");
          return;
        }
        if (data.error) {
          setError(data);
        } else {
          alert("Order Successfully");
          navigate("/history");
        }
      })
      .catch((err) => console.log(err));
  };
  //----------------------------------
  return (
    <div className={classes.container}>
      <Banner></Banner>
      <h2 className={classes.heading}>BILLING DETAILS</h2>
      <div className={classes.div_flex}>
        <form ref={form}>
          <label htmlFor="name">FULL NAME:</label>
          <input
            id="name"
            name="name"
            placeholder="Enter Your Full Name Here!"
          ></input>
          <label htmlFor="email">EMAIL:</label>
          <input
            id="email"
            name="email"
            placeholder="Enter Your Email Here!"
          ></input>
          <label htmlFor="phone">PHONE NUMBER:</label>
          <input
            id="phone"
            name="phoneNumber"
            placeholder="Enter Your Phone Number Here!"
          ></input>
          <label htmlFor="address">ADDRESS:</label>
          <input
            id="address"
            name="address"
            placeholder="Enter Your Address Here!"
          ></input>
          {error.error && <h3>{error.message}</h3>}
          <button type="submit" onClick={(event) => orderHandle(event)}>
            Place order
          </button>
        </form>
        <div className={classes.order}>
          <h2>YOUR ORDER</h2>
          {list.map((cur, i) => (
            <div>
              <p>{cur.product_id.name}</p>
              <p>
                {convert(String(cur.product_id.price))} $ x {cur.quantity}
              </p>
            </div>
          ))}
          <div className={classes.total}>
            <p>TOTAL</p>
            <p>{convert(String(total))} $</p>
          </div>
        </div>
      </div>
    </div>
  );
}
//--------------------------------------------
export default CheckOutPage;
