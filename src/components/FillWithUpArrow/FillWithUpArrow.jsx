/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowUp2 } from "../../icons/IconsArrowUp2";
import "./style.css";

export const FillWithUpArrow = ({ className }) => {
  return (
    <div className={`fill-with-up-arrow ${className}`}>
      <IconsArrowUp2 className="icons-arrow-up" />
    </div>
  );
};
