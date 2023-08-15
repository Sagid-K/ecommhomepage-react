/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCopyright2 } from "../../icons/IconCopyright2";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconTwitter } from "../../icons/IconTwitter";
import { AppStore } from "../AppStore";
import { GooglePlay } from "../GooglePlay";
import { Logo } from "../Logo";
import { QrCode } from "../QrCode";
import { SendMail } from "../SendMail";
import { UnderLine } from "../UnderLine";
import "./style.css";

export const Footer = ({
  className,
  googlePlayVector = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-3-2.svg",
  googlePlayImg = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-2-2.svg",
  googlePlayVector1 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-4-2.svg",
  googlePlayVector2 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-1-2.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame-19">
        <UnderLine className="under-line-instance" />
        <div className="frame-wrapper">
          <div className="frame-20">
            <IconCopyright2 className="icon-copyright" />
            <p className="text-wrapper-20">Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
      <div className="frame-21">
        <div className="frame-22">
          <div className="frame-23">
            <div className="frame-23">
              <Logo divClassName="design-component-instance-node-2" />
              <div className="text-wrapper-21">Subscribe</div>
            </div>
            <p className="text-wrapper-22">Get 10% off your first order</p>
          </div>
          <SendMail
            className="send-mail-instance"
            divClassName="design-component-instance-node-2"
            iconSend2Color="#FAFAFA"
          />
        </div>
        <div className="frame-23">
          <div className="text-wrapper-23">Support</div>
          <div className="frame-22">
            <p className="element-bijoy-sarani">111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.</p>
            <div className="text-wrapper-22">exclusive@gmail.com</div>
            <div className="text-wrapper-22">+88015-88888-9999</div>
          </div>
        </div>
        <div className="frame-23">
          <div className="text-wrapper-23">Account</div>
          <div className="frame-22">
            <div className="text-wrapper-24">My Account</div>
            <div className="text-wrapper-22">Login / Register</div>
            <div className="text-wrapper-22">Cart</div>
            <div className="text-wrapper-22">Wishlist</div>
            <div className="text-wrapper-22">Shop</div>
          </div>
        </div>
        <div className="frame-23">
          <div className="text-wrapper-23">Quick Link</div>
          <div className="frame-22">
            <div className="text-wrapper-24">Privacy Policy</div>
            <div className="text-wrapper-22">Terms Of Use</div>
            <div className="text-wrapper-22">FAQ</div>
            <div className="text-wrapper-22">Contact</div>
          </div>
        </div>
        <div className="frame-23">
          <div className="frame-23">
            <div className="text-wrapper-23">Download App</div>
            <div className="frame-24">
              <p className="text-wrapper-25">Save $3 with App New User Only</p>
              <div className="frame-25">
                <QrCode />
                <div className="frame-26">
                  <GooglePlay
                    className="google-play-instance"
                    img={googlePlayImg}
                    vector={googlePlayVector2}
                    vector1={googlePlayVector1}
                    vector2={googlePlayVector}
                  />
                  <AppStore />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-27">
            <IconFacebook1 className="icon-instance-node" />
            <IconTwitter className="icon-instance-node" />
            <IconInstagram1 className="icon-instance-node" />
            <IconLinkedin1 className="icon-instance-node" />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  googlePlayVector: PropTypes.string,
  googlePlayImg: PropTypes.string,
  googlePlayVector1: PropTypes.string,
  googlePlayVector2: PropTypes.string,
};
