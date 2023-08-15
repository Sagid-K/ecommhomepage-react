/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ColourChnage = ({ className, ellipseClassName, ellipseClassNameOverride }) => {
  return (
    <div className={`colour-chnage ${className}`}>
      <div className="group">
        <div className="overlap-group-3">
          <div className={`ellipse-2 ${ellipseClassName}`} />
          <div className="ellipse-3" />
        </div>
      </div>
      <div className={`ellipse-4 ${ellipseClassNameOverride}`} />
    </div>
  );
};
