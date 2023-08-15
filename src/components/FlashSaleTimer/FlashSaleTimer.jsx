/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const FlashSaleTimer = () => {
  return (
    <div className="flash-sale-timer">
      <div className="div">
        <div className="text-wrapper">Days</div>
        <div className="text-wrapper-2">03</div>
      </div>
      <div className="frame-2">
        <div className="text-wrapper-3">Hours</div>
        <div className="text-wrapper-4">23</div>
      </div>
      <div className="frame-3">
        <div className="text-wrapper-5">Minutes</div>
        <div className="text-wrapper-6">19</div>
      </div>
      <div className="frame-4">
        <div className="text-wrapper-7">Seconds</div>
        <div className="text-wrapper-8">56</div>
      </div>
      <div className="semiclone">
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
      <div className="semiclone-2">
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
      <div className="semiclone-3">
        <div className="ellipse" />
        <div className="ellipse" />
      </div>
    </div>
  );
};
