/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FlashSellTimer = ({ flashSaleOffer, className, divClassName, divClassNameOverride }) => {
  return (
    <div className={`flash-sell-timer ${className}`}>
      <div className={`frame ${flashSaleOffer}`}>
        <div className={`element ${divClassName}`}>
          {flashSaleOffer === "days-fill" && <>05</>}

          {flashSaleOffer === "hours" && <>23</>}

          {flashSaleOffer === "minutes" && <>59</>}

          {flashSaleOffer === "seconds" && <>35</>}
        </div>
        <div className={`days ${divClassNameOverride}`}>
          {flashSaleOffer === "days-fill" && <>Days</>}

          {flashSaleOffer === "hours" && <>Hours</>}

          {flashSaleOffer === "minutes" && <>Minutes</>}

          {flashSaleOffer === "seconds" && <>Seconds</>}
        </div>
      </div>
    </div>
  );
};

FlashSellTimer.propTypes = {
  flashSaleOffer: PropTypes.oneOf(["days-fill", "minutes", "hours", "seconds"]),
};
