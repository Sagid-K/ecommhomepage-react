/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeartSmall19 } from "../../icons/HeartSmall19";
import { UserOff } from "../../icons/UserOff";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SearchComponentSet } from "../SearchComponentSet";
import { WithBuy } from "../WithBuy";
import "./style.css";

export const HeaderWrapper = ({
  className,
  frameClassName,
  withBuyCart = "on",
  withBuyCartOnClassName,
  visible = true,
}) => {
  return (
    <div className={`header-wrapper ${className}`}>
      <div className={`frame-32 ${frameClassName}`}>
        <Logo />
        <div className="frame-33">
          <Header className="design-component-instance-node-3" header="header-home-hover" />
          <Header header="contact" />
          <Header header="about" />
          <Header header="sign-up" />
        </div>
      </div>
      <div className="frame-34">
        <SearchComponentSet className="design-component-instance-node-3" property1="active" />
        <div className="frame-35">
          <HeartSmall19 className="icon-instance-node-2" />
          <WithBuy cart={withBuyCart} className={withBuyCartOnClassName} />
          {visible && <UserOff className="icon-instance-node-2" />}
        </div>
      </div>
    </div>
  );
};

HeaderWrapper.propTypes = {
  withBuyCart: PropTypes.string,
  visible: PropTypes.bool,
};
