import React from "react";

import "../CSS/signup/signup.modules.css";
import links from "../API/links.json";
import { SignupForm } from "../components/signup/SignupForm";
import { SignupNav } from "../components/signup/SignupNav";
import { SignupTopDescription } from "../components/signup/SignupTopDescription";
import { SignupSideDescription } from "../components/signup/SignupSideDescription";
import { SignupBottom } from "../components/signup/SignupBottom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  // console.log("links:", links.images);

  return (
    <div id="signup">
      <div
      onClick={() => {
        navigate("/");
       }}
       id="signupNav">
        <SignupNav logo={links.images.logo} logoName="toggltLogo" />
      </div>

      <div id="signupMiddle">
        <SignupTopDescription />

        <div id="signupFormDescDiv">
          <SignupForm
            googleButtonImage={links.images.googleButtonImage}
            appleButtonLogo={links.images.appleButtonLogo}
          />

          <SignupSideDescription />
        </div>
      </div>

      <div id="signupBottom">
        <SignupBottom />
      </div>
    </div>
  );
};
