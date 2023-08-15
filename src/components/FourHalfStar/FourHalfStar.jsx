/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StarHalfFilled10 } from "../../icons/StarHalfFilled10";
import "./style.css";

export const FourHalfStar = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  imgClassName,
  imgClassNameOverride,
  vector = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  img = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  vector1 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  vector2 = "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
}) => {
  return (
    <div className={`four-half-star ${className}`}>
      <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
      <img className={`vector ${vectorClassNameOverride}`} alt="Vector" src={img} />
      <img className={`vector ${imgClassName}`} alt="Vector" src={vector1} />
      <img className={`vector ${imgClassNameOverride}`} alt="Vector" src={vector2} />
      <StarHalfFilled10 className="star-half-filled" />
    </div>
  );
};

FourHalfStar.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
};
