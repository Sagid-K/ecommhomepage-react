/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSend2 } from "../../icons/IconSend2";
import "./style.css";

export const SendMail = ({ className, divClassName, iconSend2Color = "black" }) => {
  return (
    <div className={`send-mail ${className}`}>
      <div className={`text-wrapper-19 ${divClassName}`}>Enter your email</div>
      <IconSend2 className="icon-send" color={iconSend2Color} />
    </div>
  );
};

SendMail.propTypes = {
  iconSend2Color: PropTypes.string,
};
