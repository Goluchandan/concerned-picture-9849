import React from "react";
import "../../CSS/signup/signupForm.modules.css";

export const SignupForm = ({ googleButtonImage, appleButtonLogo }) => {
  return (
    <div id="signupForm">
      <div id="signupFormTopButtons">
        <button>
          <img
            className="signupFormTopButtonsimage"
            src={googleButtonImage}
            alt="googleImage"
          />
          Sign up via Google
        </button>

        <button>
          <img
            className="signupFormTopButtonsimage"
            src={appleButtonLogo}
            alt="appleLogo"
          />
          Sign up via Apple
        </button>
      </div>

      <div id="signupFormOr">
        <div className="signupFormOrSide"></div>
        <div>OR</div>
        <div className="signupFormOrSide"></div>
      </div>

      <form id="signupFormUserData" action="">
        <p>Email</p>
        <input
          className="signupFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
        />

        <p>Password</p>
        <input
          className="signupFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
        />

        <button>Sign up via Email</button>
        <p>
          By signing up, you agree to our <u>terms of service</u>,{" "}
          <u>privacy policy</u> and to receiving marketing communication from
          Toggl Track. You can opt out anytime.
        </p>
      </form>
    </div>
  );
};
