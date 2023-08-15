/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component21 } from "../../icons/Component21";
import "./style.css";

export const SearchComponentSet = ({ property1, className }) => {
  return (
    <div className={`search-component-set ${property1} ${className}`}>
      {property1 === "active" && (
        <div className="frame-31">
          <p className="text-wrapper-29">What are you looking for?</p>
          <Component21 className="component" />
        </div>
      )}
    </div>
  );
};

SearchComponentSet.propTypes = {
  property1: PropTypes.oneOf(["active", "default"]),
};
