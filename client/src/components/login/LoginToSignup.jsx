import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginToSignup = () => {
  const navigate = useNavigate();

  return (
    <div id="loginToSignup">
      <p>Don't have an account?</p>

      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign up for Free
      </button>
    </div>
  );
};
