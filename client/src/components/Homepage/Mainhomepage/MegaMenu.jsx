import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MenuActiveContext } from "../Context/MenuActiveContext";
import "./megamenu.css";
export const MegaMenu = ({ name, children }) => {
  const arr = useContext(MenuActiveContext);

  const [active, setActive, handleMegaMenu, handleClose] = arr;

  console.log({ active, setActive, handleMegaMenu, handleClose });
  return (
    <div className="rajadhi">
      <h2 className="nav-links">
        <p onClick={handleMegaMenu}>
          <p className="desktop-item">{name}</p>
        </p>
        <div
          className="mega-box"
          style={
            active
              ? {
                  visibility: "visible",
                  transition: "all 0.3s ease",
                  opacity: "1",
                }
              : { visibility: "hidden" }
          }
        >
          {children}
        </div>
      </h2>
    </div>
  );
};
