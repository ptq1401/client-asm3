import classes from "./Product.module.css";
import { json, useLoaderData } from "react-router-dom";
import Review from "./Review";
import Image from "./Image";
import Description from "./Description";
import Related from "./Related";
//------------------------------------------------------
function Product() {
  const data = useLoaderData();
  return (
    <div className={classes.product}>
      <div className={classes["product-review"]}>
        <Image product={data.detailProduct}></Image>
        <Review product={data.detailProduct}></Review>
      </div>
      <Description desc={data.detailProduct.long_desc}></Description>
      <Related data={data.relatedProduct}></Related>
    </div>
  );
}
//------------------------------------------------------
export default Product;
export async function loader({ params }) {
  const response = await fetch(
    "https://server-asm3-e5pk.onrender.com/get-detail",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ _id: params.productID }),
    }
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
