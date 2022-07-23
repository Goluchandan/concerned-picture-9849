import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const DummyHome = () => {
  let localToken = localStorage.getItem("token") || null;
  // console.log("localToken:", localToken);

  let [userDisplay, setUserDisplay] = useState("");

  useEffect(() => {
    homePage();
  }, []);

  const homePage = async () => {
    let error = null;
    let response = await axios
      .get(`http://localhost:8080/${localToken}`)
      .catch((err) => {
        console.log("err:", err);
        if (err.response.data) error = err.response.data.message;
      });

    if (response) {
      console.log("response:", response.data[0]);
      setUserDisplay(response.data[0]);
    }
    if (error) {
      console.log("error:", error);
      // window.alert(error);
    }
  };

  return (
    <div>
      <h1>This is a Dummy Home</h1>
      <h3>Replace with real Homepage</h3>
      {userDisplay && <div>{userDisplay}</div>}
    </div>
  );
};
