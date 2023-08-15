/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cart1 } from "../../icons/Cart1";
import "./style.css";

export const WithBuy = ({ cart, className }) => {
  return (
    <div className={`with-buy ${cart} ${className}`}>
      {cart === "on" && (
        <div className="overlap-3">
          <Cart1 className="cart1-5" color="black" />
          <div className="group-3">
            <div className="overlap-group-9">
              <div className="ellipse-6" />
              <div className="text-wrapper-30">2</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

WithBuy.propTypes = {
  cart: PropTypes.oneOf(["off", "on"]),
};
