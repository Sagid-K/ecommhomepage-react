/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Dropdown4 } from "../../icons/Dropdown4";
import "./style.css";

export const TopHeader = ({ className }) => {
  return (
    <div className={`top-header ${className}`}>
      <div className="frame-28">
        <div className="frame-29">
          <p className="text-wrapper-26">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <div className="text-wrapper-27">ShopNow</div>
        </div>
        <div className="frame-30">
          <div className="text-wrapper-28">English</div>
          <Dropdown4 className="drop-down" color="white" />
        </div>
      </div>
    </div>
  );
};
