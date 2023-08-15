/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconDelivery4 } from "../../icons/IconDelivery4";
import { Services } from "../Services";
import "./style.css";

export const ServicesFast = ({ className }) => {
  return (
    <div className={`services-fast ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group-5">
          <Services className="services-instance" services="group-1000005937" />
          <IconDelivery4 className="icon-delivery" />
        </div>
      </div>
      <div className="frame-15">
        <div className="text-wrapper-13">FREE AND FAST DELIVERY</div>
        <p className="p">Free delivery for all orders over $140</p>
      </div>
    </div>
  );
};
