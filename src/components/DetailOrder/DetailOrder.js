import classes from "./DetailOrder.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { convert } from "../CartPage/ProductList";
//----------------------------------------------------------
function DetailOrder() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://server-asm3-e5pk.onrender.com/detail-order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ order_id: id }),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.errorService) {
          navigate("/error");
          return;
        }
        setData(data);
      });
  }, []);

  //-----------------------------------------
  if (!data) return <h3 className={classes.loading}>Loading ...</h3>;

  return (
    <div className={classes.container}>
      <h1>INFORMATION ORDER</h1>
      <p>ID USER: {data.user_id}</p>
      <p>Full Name: {data.name}</p>
      <p>Phone: {data.phoneNumber}</p>
      <p>Address: {data.address}</p>
      <p>Total: {convert(String(data.total))} $</p>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>ID PRODUCT</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          {data.cart.map((cur, i) => (
            <tr key={i}>
              <td>{cur.product_id._id}</td>
              <td>
                <img src={cur.product_id.img4} />
              </td>
              <td>{cur.product_id.name}</td>
              <td>{convert(String(cur.product_id.price))} $</td>
              <td>{cur.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//---------------------------------------------------
export default DetailOrder;
