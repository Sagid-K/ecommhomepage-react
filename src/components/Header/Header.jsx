/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UnderLine } from "../UnderLine";
import "./style.css";

export const Header = ({ header, className }) => {
  return (
    <div className={`header ${header} ${className}`}>
      {["header-about-hover", "header-contact-hover", "header-home-hover", "header-sign-up-hover"].includes(header) && (
        <>
          <div className="home-2">
            {header === "header-home-hover" && <>Home</>}

            {header === "header-contact-hover" && <>Contact</>}

            {header === "header-about-hover" && <>About</>}

            {header === "header-sign-up-hover" && <>Sign Up</>}
          </div>
          <UnderLine
            className={`${
              header === "header-contact-hover" ? "class-5" : header === "header-sign-up-hover" ? "class-6" : "class-7"
            }`}
          />
        </>
      )}

      {["about", "contact", "home", "sign-up"].includes(header) && (
        <div className="home-3">
          {header === "home" && <>Home</>}

          {header === "contact" && <>Contact</>}

          {header === "about" && <>About</>}

          {header === "sign-up" && <>Sign Up</>}
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.oneOf([
    "header-contact-hover",
    "contact",
    "home",
    "about",
    "header-about-hover",
    "header-home-hover",
    "header-sign-up-hover",
    "sign-up",
  ]),
};
