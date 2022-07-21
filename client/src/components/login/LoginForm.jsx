import React from "react";

import "../../CSS/login/loginForm.modules.css";

export const LoginForm = ({ googleButtonImage, appleButtonLogo }) => {
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

        <button>
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

      <form id="loginFormUserData" action="">
        <p>Email</p>
        <input
          className="loginFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
        />

        <p>Password</p>
        <input
          className="loginFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
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
