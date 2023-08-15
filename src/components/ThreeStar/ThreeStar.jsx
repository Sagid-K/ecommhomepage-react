/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ThreeStar = ({ className }) => {
  return (
    <img
      className={`three-star ${className}`}
      alt="Three star"
      src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/three-star-2.svg"
    />
  );
};
