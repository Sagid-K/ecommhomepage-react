/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DiscountPercent } from "../DiscountPercent";
import { FillEye } from "../FillEye";
import { FillHeart } from "../FillHeart";
import { FiveStar } from "../FiveStar";
import { FourHalfStar } from "../FourHalfStar";
import { FourStar } from "../FourStar";
import "./style.css";

export const CartWithFlat = ({
  property1,
  className,
  frameClassName,
  akClassName,
  ak = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ak-900-01-500x500-1-2@2x.png",
  fourHalfStarVectorClassName,
  fourHalfStarVectorClassNameOverride,
  fourHalfStarImgClassName,
  fourHalfStarImgClassNameOverride,
  fourHalfStarVector = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  fourHalfStarImg = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  fourHalfStarVector1 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  fourHalfStarVector2 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
}) => {
  return (
    <div className={`cart-with-flat ${className}`}>
      <div className="frame-5">
        <div className={`overlap-group ${property1}`}>
          <DiscountPercent
            className="discount-percent-instance"
            text={
              property1 === "cart-with-discount"
                ? "-40%"
                : property1 === "variant-3"
                ? "-30%"
                : property1 === "variant-4"
                ? "-25%"
                : "-35%"
            }
          />
          <div className="frame-6">
            <FillHeart />
            <FillEye />
          </div>
          <div className={`ak-wrapper ${property1 === "cart-with-discount-hover" ? frameClassName : undefined}`}>
            <img
              className={`ak ${property1 === "cart-with-discount-hover" ? akClassName : undefined}`}
              alt="Ak"
              src={
                property1 === "cart-with-discount"
                  ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/g92-2-500x500-1-2@2x.png"
                  : property1 === "variant-3"
                  ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/g27cq4-500x500-1-2@2x.png"
                  : property1 === "variant-4"
                  ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/sam-moghadam-khamseh-kvmdstrgobm-unsplash-1-3@2x.png"
                  : ak
              }
            />
          </div>
        </div>
        {property1 === "cart-with-discount-hover" && (
          <div className="overlap">
            <div className="text-wrapper-9">Add To Cart</div>
          </div>
        )}
      </div>
      <div className="frame-7">
        <div className="HAVIT-HV-gamepad">
          {property1 === "cart-with-discount" && <>HAVIT HV-G92 Gamepad</>}

          {property1 === "variant-3" && <>IPS LCD Gaming Monitor</>}

          {property1 === "variant-4" && <>S-Series Comfort Chair</>}

          {property1 === "cart-with-discount-hover" && <>AK-900 Wired Keyboard</>}
        </div>
        <div className="frame-8">
          <div className="element-3">
            {property1 === "cart-with-discount" && <>$120</>}

            {property1 === "variant-3" && <>$370</>}

            {property1 === "variant-4" && <>$375</>}

            {property1 === "cart-with-discount-hover" && <>$960</>}
          </div>
          <div className="element-4">
            {property1 === "cart-with-discount" && <>$160</>}

            {["variant-3", "variant-4"].includes(property1) && <>$400</>}

            {property1 === "cart-with-discount-hover" && <>$1160</>}
          </div>
        </div>
        <div className="frame-9">
          {["cart-with-discount", "variant-3"].includes(property1) && <FiveStar className="instance-node" />}

          {property1 === "variant-4" && (
            <FourHalfStar
              className="four-half-star-instance"
              img={fourHalfStarImg}
              imgClassName={fourHalfStarVectorClassName}
              imgClassNameOverride={fourHalfStarVectorClassNameOverride}
              vector={fourHalfStarVector}
              vector1={fourHalfStarVector1}
              vector2={fourHalfStarVector2}
              vectorClassName={fourHalfStarImgClassName}
              vectorClassNameOverride={fourHalfStarImgClassNameOverride}
            />
          )}

          {["cart-with-discount", "variant-3", "variant-4"].includes(property1) && (
            <div className="div-2">
              {property1 === "cart-with-discount" && <>(88)</>}

              {["variant-3", "variant-4"].includes(property1) && <>(99)</>}
            </div>
          )}

          {property1 === "cart-with-discount-hover" && (
            <>
              <FourStar className="instance-node" />
              <div className="div-2">(75)</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CartWithFlat.propTypes = {
  property1: PropTypes.oneOf(["variant-4", "variant-3", "cart-with-discount-hover", "cart-with-discount"]),
  ak: PropTypes.string,
  fourHalfStarVector: PropTypes.string,
  fourHalfStarImg: PropTypes.string,
  fourHalfStarVector1: PropTypes.string,
  fourHalfStarVector2: PropTypes.string,
};
