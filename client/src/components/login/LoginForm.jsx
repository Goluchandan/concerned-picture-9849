import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user in login:", user);

    let error = null;
    let response = await axios
      .post("https://toggl-track-clone.herokuapp.com/login", user)
      .catch((err) => {
        console.log("err:", err);
        error = err.response.data.message;
      });

    if (response) {
      console.log("response:", response.data[0]);
      localStorage.setItem("token", response.data[0]);
      navigate(`/${response.data[0]}`);
    }
    if (error) {
      console.log("error:", error);
      window.alert(error);
    }
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
