import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../store/index";
//----------------pages-----------------------
function Navigation() {
  //---hooks---------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.login);
  let user = useSelector((state) => state.login.currentUser);
  let name;
  if (user) {
    name = user.name;
    if (name.length >= 7) name = name.slice(0, 7);
  }
  ///---logout---
  const LogoutHandle = () => {
    fetch("https://server-asm3-e5pk.onrender.com/logout", {
      method: "GET",
      credentials: "include",
    });
    dispatch(loginAction.ON_LOGOUT());
    navigate("/login?mode=login");
  };
  //--------------
  return (
    <div className={classes.navbar}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop?mode=All"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          Shop
        </NavLink>
      </div>
      <h1 className={classes.heading}>BOUTIQUE</h1>
      <div>
        {login && (
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? classes.active : classes.link
            }
          >
            History
          </NavLink>
        )}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          <i class="fas fa-shopping-cart"></i> Cart
        </NavLink>
        <NavLink
          to="/login?mode=login"
          className={({ isActive }) =>
            isActive ? classes.active : classes.link
          }
        >
          <i className="fas fa-user"></i> {login ? name : "Login"}
        </NavLink>
        {login && (
          <button onClick={LogoutHandle} className={classes["button-logout"]}>
            (Logout)
          </button>
        )}
      </div>
    </div>
  );
}
//------------------export------------------------
export default Navigation;
