import React from "react";

import "../CSS/login/login.modules.css";
import links from "../API/links.json";
import { LoginForm } from "../components/login/LoginForm";
import { LoginToSignup } from "../components/login/LoginToSignup";


import HomeNavbar from "../components/Products_Page/Home_Navbar/HomeNavbar";



export const Login = () => {
  return (
    <>
      <HomeNavbar />

      <div id="login">
        {/* "HEADER" Component goes here */}


        <LoginForm
          googleButtonImage={links.images.googleButtonImage}
          appleButtonLogo={links.images.appleButtonLogo}
        />
        <LoginToSignup />

        {/* "FOOTER" Component goes here */}
      </div>

    </>

  );
};
