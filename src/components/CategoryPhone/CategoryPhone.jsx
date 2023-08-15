/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CategoryCellphone1 } from "../../icons/CategoryCellphone1";
import "./style.css";

export const CategoryPhone = ({
  categoryPhone,
  hover,
  icon = <CategoryCellphone1 className="category-cellphone" color="black" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    categoryPhone: categoryPhone || "phone",
    hover: hover,
  });

  return (
    <div
      className={`category-phone hover-1-${state.hover}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`phones ${state.categoryPhone} hover-2-${state.hover}`}>
        {state.categoryPhone === "phone" && <>Phones</>}

        {state.categoryPhone === "computer" && <>Computers</>}

        {state.categoryPhone === "smart-watch" && <>SmartWatch</>}

        {state.categoryPhone === "camera" && <>Camera</>}

        {state.categoryPhone === "headphone" && <>HeadPhones</>}

        {state.categoryPhone === "gaming" && <>Gaming</>}
      </div>
      {icon}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

CategoryPhone.propTypes = {
  categoryPhone: PropTypes.oneOf(["camera", "smart-watch", "phone", "computer", "headphone", "gaming"]),
  hover: PropTypes.bool,
};
