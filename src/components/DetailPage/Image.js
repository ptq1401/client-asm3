import classes from "./Image.module.css";
//--------------------------------------------------------
function Image({ product }) {
  return (
    <div className={classes.container}>
      <div className={classes.imagegroup}>
        <img src={product.img1} alt="img1" />
        <img src={product.img2} alt="img2" />
        <img src={product.img3} alt="img3" />
        <img src={product.img4} alt="img4" />
      </div>
      <img src={product.img5} alt="img5" />
    </div>
  );
}
//--------------------------------------------------------
export default Image;
