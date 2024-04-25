import classes from "./LoginForm.module.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/index";
//---------------------------------------------
function LoginForm() {
  //----hooks----
  const [error, setError] = useState({ error: false, message: "" });
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const login = params.get("mode") === "login" ? true : false;
  const form = useRef();

  //---redux----
  const isLogin = useSelector((state) => state.login.login);
  const dispatch = useDispatch();

  //---click login handle-------------------
  const LoginHandle = (e) => {
    e.preventDefault(e);
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    fetch("https://server-asm3-e5pk.onrender.com/login", {
      method: "POST",
      credentials: "include",
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
          dispatch(loginAction.ON_LOGIN(data.user));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  //---click signup handle-------------------
  const SignupHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      fullName: formData.get("fullName"),
      confirmPassword: formData.get("confirmPassword"),
    };

    fetch("https://server-asm3-e5pk.onrender.com/signup", {
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
          alert("User is created!");
          window.location = "/login?mode=login";
        }
      })
      .catch((err) => console.log(err));
  };

  //----click logout handle----
  const LogoutHandle = () => {
    fetch("https://server-asm3-e5pk.onrender.com/logout", {
      method: "GET",
      credentials: "include",
    });
    dispatch(loginAction.ON_LOGOUT());
    navigate("/login?mode=login");
  };

  //---return------
  return isLogin ? (
    <div>
      <button className={classes["button-logout"]} onClick={LogoutHandle}>
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  ) : (
    <div className={classes.container}>
      <form className={classes.form} ref={form}>
        <h2>{login ? "Sign In" : "Sign Up"}</h2>
        {error.error && <h4>{error.message}</h4>}
        <div>
          {!login && <input placeholder="Full Name" name="fullName"></input>}
          <input placeholder="Email" name="email"></input>
          <input placeholder="Password" name="password" type="password"></input>
          {!login && (
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
            ></input>
          )}
          {login && (
            <button onClick={(event) => LoginHandle(event)} type="submit">
              SIGN IN
            </button>
          )}
          {!login && (
            <button onClick={(event) => SignupHandle(event)} type="submit">
              SIGN UP
            </button>
          )}
        </div>
        <p>
          {login ? "Create an account? " : "Login? "}
          <Link
            className={classes.link}
            to={`/login?mode=${login ? "signup" : "login"}`}
          >
            {login ? "Sign Up" : "Click"}
          </Link>
        </p>
      </form>
    </div>
  );
}
//---------------------------------------------
export default LoginForm;
