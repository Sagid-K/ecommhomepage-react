/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconHeadphone } from "../../icons/IconHeadphone";
import { Services } from "../Services";
import "./style.css";

export const ServicesCustomer = ({ icon = <IconHeadphone className="icon-headphone" color="#FAFAFA" /> }) => {
  return (
    <div className="services-customer">
      <div className="div-wrapper">
        <div className="overlap-group-6">
          <Services className="design-component-instance-node" services="group-1000005937" />
          {icon}
        </div>
      </div>
      <div className="frame-16">
        <div className="text-wrapper-14">24/7 CUSTOMER SERVICE</div>
        <div className="text-wrapper-15">Friendly 24/7 customer support</div>
      </div>
    </div>
  );
};
