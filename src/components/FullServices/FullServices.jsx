/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCustomerService1 } from "../../icons/IconCustomerService1";
import { ServicesCustomer } from "../ServicesCustomer";
import { ServicesFast } from "../ServicesFast";
import { ServicesMoneyBack } from "../ServicesMoneyBack";
import "./style.css";

export const FullServices = ({
  className,
  servicesCustomerIcon = <IconCustomerService1 className="icon-customer" color="white" />,
  visible = true,
}) => {
  return (
    <div className={`full-services ${className}`}>
      <ServicesFast className="frame-18" />
      <ServicesCustomer icon={servicesCustomerIcon} />
      <ServicesMoneyBack className="frame-18" />
      {visible && <ServicesMoneyBack className="frame-18" />}
    </div>
  );
};

FullServices.propTypes = {
  visible: PropTypes.bool,
};
