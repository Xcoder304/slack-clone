import React from "react";
import "../Styles/login.css";
import { auth } from "../firebase/db";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ContextVal } from "../context/Context";

const Login = () => {
  const [{ user }, dispatch] = ContextVal();

  const SignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: "USER__LOGIN",
          user: res,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__imageWapper">
          <img src="https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u?expiry=1649681497&fit=bounds&height=800&sig=N2FkYzRlYWFhNWIwNzgzNGRmNTZiMGEyY2Y1MzQwMjlkYzFlYmRkZg%3D%3D&width=1100" />
        </div>
        <h3>Welcome To slack-clone</h3>
      </div>
      <div className="login__buttonContainer">
        <button onClick={SignIn}>login with google</button>
      </div>
    </div>
  );
};

export default Login;
