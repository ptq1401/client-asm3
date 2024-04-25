import Card from "./Card";
import ReactDOM from "react-dom";
import classes from "./Popup.module.css";

//-------------------------------------------------------
const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const Container = (props) => {
  return (
    <>
      <Backdrop></Backdrop>
      <div className={classes.modal}>
        <Card></Card>
      </div>
    </>
  );
};
const Popup = (props) => {
  return ReactDOM.createPortal(<Container />, document.getElementById("popup"));
};
//----------------
export default Popup;
