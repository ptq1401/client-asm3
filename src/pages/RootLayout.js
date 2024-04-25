import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/NavBar";
import LiveChat from "../components/LiveChat/LiveChat";
import { useDispatch } from "react-redux";
import { loginAction } from "../store";
import { useEffect } from "react";
function RootLayout() {
  //---redux---
  const dispatch = useDispatch();
  //------check login when start page-----
  useEffect(() => {
    fetch("https://server-asm3-e5pk.onrender.com/check-login", {
      mode: "no-cors",
      method: "GET",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((user) => {
        if (!user) return;
        if (!user.error) dispatch(loginAction.ON_LOGIN(user.user));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <LiveChat></LiveChat>
      <Outlet></Outlet>
    </>
  );
}
export default RootLayout;
