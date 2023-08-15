/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconSecure4 } from "../../icons/IconSecure4";
import { Services } from "../Services";
import "./style.css";

export const ServicesMoneyBack = ({ className }) => {
  return (
    <div className={`services-money-back ${className}`}>
      <div className="services-2">
        <div className="overlap-group-7">
          <Services className="group-2" services="group-1000005937" />
          <IconSecure4 className="icon-secure" />
        </div>
      </div>
      <div className="frame-17">
        <div className="text-wrapper-16">MONEY BACK GUARANTEE</div>
        <p className="text-wrapper-17">We reurn money within 30 days</p>
      </div>
    </div>
  );
};
