import ReactDOM from "react-dom";
import classes from "./LiveChat.module.css";
import { chatAction } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
//-------------------------------------------------------
const BoxMessage = () => {
  const show = useSelector((state) => state.chat.show);
  const login = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const message = useRef();
  const [chatList, setChatList] = useState([]);
  //----
  useEffect(() => {
    fetch("https://server-asm3-e5pk.onrender.com/get-chat", {
      method: "GET",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((result) => setChatList(result));
  }, []);
  ///---

  const postMessageHandle = () => {
    if (!message.current.value) return;
    const data = { msg: message.current.value, user: true };
    fetch("https://server-asm3-e5pk.onrender.com/post-message", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((err) => {
        if (err.error) return alert("Some Error");
        setChatList((prev) => prev.concat([data]));
        message.current.value = "";
      });
  };

  //------
  return (
    <>
      {show && (
        <div className={classes.box}>
          <div className={classes["box-top"]}>
            <p>Customer Support</p>
            <button>Let's chat app</button>
          </div>
          <div className={classes["box-chat"]}>
            {chatList.map((cur, i) => (
              <p
                key={i}
                className={classes[`${cur.user ? "customer" : "admin"}`]}
              >
                {cur.msg}
              </p>
            ))}
            {/* <p className={classes.customer}>Xin chào</p>
            <p className={classes.customer}>Làm thế nào để xem các sản phẩm</p>
            <p className={classes.admin}>Chào bạn</p>
            <p className={classes.admin}>
              Bạn có thể vào mục shop để xem các sản phẩm
            </p> */}
          </div>
          <div className={classes["box-bottom"]}>
            <i class="fas fa-user-tie" style={{ color: "#3965b1" }}></i>
            <input
              type="text"
              placeholder="Enter Message!"
              ref={message}
            ></input>
            <button>
              <i class="fas fa-paperclip"></i>
            </button>
            <button>
              <i class="fas fa-smile" style={{ color: "#6e6e6e" }}></i>
            </button>
            <button onClick={postMessageHandle} className={classes.enter}>
              <i class="fas fa-paper-plane" style={{ color: "#37aee1" }}></i>
            </button>
          </div>
        </div>
      )}
      {login && (
        <button
          className={classes["button-mess"]}
          onClick={() => dispatch(chatAction.CLICK())}
        >
          <i class="fab fa-facebook-messenger"></i>
        </button>
      )}
    </>
  );
};
const LiveChat = () => {
  return ReactDOM.createPortal(
    <BoxMessage />,
    document.getElementById("livechat")
  );
};
//----------------
export default LiveChat;
