import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../CSS/signup/signupForm.modules.css";

export const SignupForm = ({ googleButtonImage, appleButtonLogo }) => {
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

    fetch("https://toggl-track-clone.herokuapp.com/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => {
        console.log("res:", res);
        if (!res.ok) {
          console.log("email already present");
          window.alert("Email already present: Please login directly");
        }
      })
      .catch((err) => console.log(err))
      .then((res) => navigate("/login"));

    // .then((res) => navigate("/login"))
  };

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

      <form id="signupFormUserData" onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          className="signupFormInput"
          type="email"
          name="email"
          placeholder="    Email"
          required
          onChange={handleChange}
        />

        <p>Password</p>
        <input
          className="signupFormInput"
          type="password"
          name="password"
          placeholder="    Password"
          required
          onChange={handleChange}
        />

        <button type="submit">Sign up via Email</button>
        <p>
          By signing up, you agree to our <u>terms of service</u>,{" "}
          <u>privacy policy</u> and to receiving marketing communication from
          Toggl Track. You can opt out anytime.
        </p>
      </form>
    </div>
  );
};
