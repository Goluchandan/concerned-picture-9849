import React from "react";

import "../CSS/login/login.modules.css";
import links from "../API/links.json";
import { LoginForm } from "../components/login/LoginForm";
import { LoginToSignup } from "../components/login/LoginToSignup";


import HomeNavbar from "../components/Products_Page/Home_Navbar/HomeNavbar";


import Footertop from "../components/Homepage/Footer/Footer";




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

      <div style={{ backgroundColor: "#2d1738", textAlign: "left" }}>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Footertop />

        </div>
      </div>

    </>

  );
};
