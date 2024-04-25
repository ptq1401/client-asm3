import classes from "./ProductList.module.css";
import { json, useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";
//-----------------------------------------------------------
function ProductList() {
  const data = useLoaderData();
  return (
    <div>
      <div className={classes.search}>
        <input
          placeholder="Enter search here!"
          className={classes.input}
        ></input>
        <select className={classes.option} defaultValue="default">
          <option value="default">Default Sorting</option>
        </select>
      </div>
      <div className={classes.productlist}>
        {data.map((cur, i) => (
          <ProductItem product={cur} key={i}></ProductItem>
        ))}
      </div>
    </div>
  );
}
//-----------------------------------------------------------
export default ProductList;
export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  const response = await fetch(
    "https://server-asm3-e5pk.onrender.com/get-product"
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
  if (mode === "All") {
    return data;
  }
  const data_filter = data.filter((cur) => cur.category === mode);
  return data_filter;
}
