/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconDelivery3 } from "../../icons/IconDelivery3";
import { IconHeadphone } from "../../icons/IconHeadphone";
import { IconSecure4 } from "../../icons/IconSecure4";
import "./style.css";

export const Services = ({ services, className }) => {
  return (
    <div className={`services ${services} ${className}`}>
      <div className="overlap-group-4">
        {["customer-service", "delivery", "money-back"].includes(services) && (
          <div className="ellipse-wrapper">
            <div className="ellipse-5" />
          </div>
        )}

        {services === "delivery" && <IconDelivery3 className="instance-node-6" color="#FAFAFA" />}

        {services === "customer-service" && <IconHeadphone className="instance-node-6" color="#FAFAFA" />}

        {services === "money-back" && <IconSecure4 className="instance-node-6" />}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.oneOf(["customer-service", "delivery", "group-1000005937", "money-back"]),
};
