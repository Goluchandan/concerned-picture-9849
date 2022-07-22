import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../CSS/login/loginForm.modules.css";

export const LoginForm = ({ googleButtonImage, appleButtonLogo }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user in signup:", user);
    let payload = JSON.stringify(user);

    fetch("http://localhost:8080/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => {
        console.log("res:", res);
        // if (!res.ok) {
        //   console.log("email already present");
        //   window.alert("Email already present: Please login directly");
        // }
      })
      .catch((err) => console.log(err))
      // .then((res) => navigate("/"));

    // .then((res) => navigate("/login"))
  };

  return (
    <div id="loginForm">
      <div id="loginFormTopButtons">
        <button>
          <img
            className="loginFormTopButtonsimage"
            src={googleButtonImage}
            alt="googleImage"
          />
          Sign up via Google
        </button>

        <button type="submit">
          <img
            className="loginFormTopButtonsimage"
            src={appleButtonLogo}
            alt="appleLogo"
          />
          Sign up via Apple
        </button>
      </div>

      {/* <div id="loginFormOr">
        <div className="loginFormOrSide"></div>
        <div>OR</div>
        <div className="loginFormOrSide"></div>
      </div> */}

      <form id="loginFormUserData" onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          className="loginFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
          onChange={handleChange}
        />

        <p>Password</p>
        <input
          className="loginFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
          onChange={handleChange}
        />

        <div id="loginFormForgot">
          <div></div>
          <u>Forgot Password</u>
        </div>

        <button>Log in</button>

        <p id="loginFormCompanyLogin">Company login (SSO){"  >"}</p>
      </form>
    </div>
  );
};
