/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cart1 } from "../../icons/Cart1";
import { IconDelete } from "../../icons/IconDelete";
import { QuickView39 } from "../../icons/QuickView39";
import { ColourChnage } from "../ColourChnage";
import { DiscountPercent } from "../DiscountPercent";
import { FillEye } from "../FillEye";
import { FillHeart } from "../FillHeart";
import { FiveStar } from "../FiveStar";
import { FourHalfStar } from "../FourHalfStar";
import { FourStar } from "../FourStar";
import { NewButton } from "../NewButton";
import { ThreeStar } from "../ThreeStar";
import "./style.css";

export const Cart = ({ product, className, colourChnageEllipseClassName }) => {
  return (
    <div className={`cart ${className}`}>
      <div className="div-3">
        {(product === "cart-hover" ||
          product === "cart-with-colour-chose" ||
          product === "cart-with-no-discount" ||
          product === "dslr-camera-no-discount" ||
          product === "gamepad-wishlist" ||
          product === "jacket-with-wishlist" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor" ||
          product === "wishlist-cart-with-discount" ||
          product === "wishlist-cart-with-no-discount") && (
          <div className="add-to-cart-wrapper">
            <div className={`add-to-cart product-${product}`}>
              {["cart-hover", "cart-with-colour-chose", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                product
              ) && <>Add To Cart</>}

              {(product === "gamepad-wishlist" ||
                product === "jacket-with-wishlist" ||
                product === "just-for-your-cart-bag" ||
                product === "just-for-your-cart-gamepad" ||
                product === "just-for-your-cart-keyboard" ||
                product === "just-for-your-cart-monitor" ||
                product === "wishlist-cart-with-discount" ||
                product === "wishlist-cart-with-no-discount") && (
                <>
                  <Cart1 className="cart-1" color="white" />
                  <div className="text-wrapper-10">Add To Cart</div>
                </>
              )}
            </div>
          </div>
        )}

        <div className={`overlap-group-2 product-0-${product}`}>
          <div className="frame-10">
            {(product === "beauty-product-no-discount" ||
              product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "dog-food-no-discount" ||
              product === "dslr-camera-no-discount" ||
              product === "gaming-control-color-choosing" ||
              product === "kids-car-with-color-choosing" ||
              product === "laptop-no-discount" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing") && <FillHeart />}

            <FillEye
              icon={
                product === "beauty-product-no-discount" ||
                product === "bestselling-bookself" ||
                product === "bestselling-coat" ||
                product === "bestselling-cooling-fan" ||
                product === "bestselling-guccibag" ||
                product === "cart-with-colour-chose" ||
                product === "cart-with-no-discount" ||
                product === "cart" ||
                product === "dog-food-no-discount" ||
                product === "dslr-camera-no-discount" ||
                product === "gaming-control-color-choosing" ||
                product === "kids-car-with-color-choosing" ||
                product === "laptop-no-discount" ||
                product === "man-jacket-color-choosing" ||
                product === "product-5" ||
                product === "soccer-boat-color-choosing" ? (
                  <QuickView39 className="instance-node-2" />
                ) : [
                    "gamepad-wishlist",
                    "jacket-with-wishlist",
                    "wishlist-cart-with-discount",
                    "wishlist-cart-with-no-discount",
                  ].includes(product) ? (
                  <IconDelete className="instance-node-2" />
                ) : undefined
              }
            />
          </div>
          {(product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-gamepad" ||
            product === "kids-car-with-color-choosing" ||
            product === "product-5") && <NewButton className="instance-node-3" />}

          {["just-for-your-cart-bag", "wishlist-cart-with-discount"].includes(product) && (
            <DiscountPercent className="instance-node-3" text="-35%" />
          )}

          <div className="frame-11">
            {(product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "bestselling-cooling-fan" ||
              product === "bestselling-guccibag" ||
              product === "cart-hover" ||
              product === "cart-with-colour-chose" ||
              product === "cart-with-no-discount" ||
              product === "cart" ||
              product === "dog-food-no-discount" ||
              product === "dslr-camera-no-discount" ||
              product === "gamepad-wishlist" ||
              product === "gaming-control-color-choosing" ||
              product === "jacket-with-wishlist" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor" ||
              product === "kids-car-with-color-choosing" ||
              product === "laptop-no-discount" ||
              product === "man-jacket-color-choosing" ||
              product === "product-5" ||
              product === "soccer-boat-color-choosing" ||
              product === "wishlist-cart-with-discount" ||
              product === "wishlist-cart-with-no-discount") && (
              <img
                className="element-cst"
                alt="Element"
                src={
                  product === "just-for-your-cart-gamepad"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/g92-2-500x500-1-2@2x.png"
                    : ["bestselling-coat", "cart"].includes(product)
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/672462-zah9d-5626-002-100-0000-light-the-north-face-x-gucci-coat-2@2x.png"
                    : product === "kids-car-with-color-choosing"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/new-mercedes-benz-gtr-licensed-ride-on-car-kids-electric-toy-car-1@2x.png"
                    : ["gamepad-wishlist", "gaming-control-color-choosing"].includes(product)
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/gp11-prd3-1-2@2x.png"
                    : product === "just-for-your-cart-bag"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ideapad-gaming-3i-01-500x500-1-2@2x.png"
                    : product === "just-for-your-cart-keyboard"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ak-900-01-500x500-1-2@2x.png"
                    : product === "just-for-your-cart-monitor"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/g27cq4-500x500-1-2@2x.png"
                    : ["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product)
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/gammaxx-l240-argb-1-500x500-1-2@2x.png"
                    : ["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product)
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/698717-z8a1x-3475-001-100-0000-light-reversible-quilted-satin-ja-2@2x.png"
                    : product === "dslr-camera-no-discount"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/eos-250d-03-500x500-1-1@2x.png"
                    : product === "bestselling-bookself"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/sam-moghadam-khamseh-l-7mqshl-au-unsplash-1-1@2x.png"
                    : product === "dog-food-no-discount"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/71rdoexxtrl-1-1@2x.png"
                    : product === "laptop-no-discount"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ideapad-gaming-3i-01-500x500-1-1@2x.png"
                    : product === "soccer-boat-color-choosing"
                    ? "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/copa-sense-1-1@2x.png"
                    : "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/547953-9c2st-8746-001-082-0000-light-gucci-savoy-medium-duffle-b-6@2x.png"
                }
              />
            )}
          </div>
          {product === "beauty-product-no-discount" && (
            <img
              className="curology"
              alt="Curology"
              src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/curology-j7pkvqrtusm-unsplash-1-2@2x.png"
            />
          )}
        </div>
      </div>
      <div className="frame-12">
        <div className="gucci-duffle-bag">
          {[
            "bestselling-guccibag",
            "cart-hover",
            "cart-with-colour-chose",
            "cart-with-no-discount",
            "product-5",
            "wishlist-cart-with-discount",
          ].includes(product) && <>Gucci duffle bag</>}

          {["bestselling-cooling-fan", "wishlist-cart-with-no-discount"].includes(product) && (
            <>RGB liquid CPU Cooler</>
          )}

          {["gamepad-wishlist", "gaming-control-color-choosing"].includes(product) && <>GP11 Shooter USB Gamepad</>}

          {["jacket-with-wishlist", "man-jacket-color-choosing"].includes(product) && <>Quilted Satin Jacket</>}

          {product === "dslr-camera-no-discount" && <>CANON EOS DSLR Camera</>}

          {product === "dog-food-no-discount" && <>Breed Dry Dog Food</>}

          {["just-for-your-cart-bag", "laptop-no-discount"].includes(product) && <>ASUS FHD Gaming Laptop</>}

          {product === "beauty-product-no-discount" && <>Curology Product Set</>}

          {product === "kids-car-with-color-choosing" && <>Kids Electric Car</>}

          {product === "soccer-boat-color-choosing" && <>Jr. Zoom Soccer Cleats</>}

          {product === "just-for-your-cart-gamepad" && <>HAVIT HV-G92 Gamepad</>}

          {product === "just-for-your-cart-keyboard" && <>AK-900 Wired Keyboard</>}

          {product === "just-for-your-cart-monitor" && <>IPS LCD Gaming Monitor</>}

          {product === "bestselling-bookself" && <>Small BookSelf</>}

          {["bestselling-coat", "cart"].includes(product) && <>The north coat</>}
        </div>
        <div className={`frame-13 product-4-${product}`}>
          {(product === "beauty-product-no-discount" ||
            product === "bestselling-coat" ||
            product === "bestselling-cooling-fan" ||
            product === "bestselling-guccibag" ||
            product === "cart-hover" ||
            product === "cart-with-colour-chose" ||
            product === "cart-with-no-discount" ||
            product === "cart" ||
            product === "dog-food-no-discount" ||
            product === "dslr-camera-no-discount" ||
            product === "gaming-control-color-choosing" ||
            product === "just-for-your-cart-bag" ||
            product === "kids-car-with-color-choosing" ||
            product === "laptop-no-discount" ||
            product === "man-jacket-color-choosing" ||
            product === "product-5" ||
            product === "soccer-boat-color-choosing" ||
            product === "wishlist-cart-with-discount") && (
            <>
              <div className="element-5">
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$960</>}

                {product === "bestselling-cooling-fan" && <>$160</>}

                {["bestselling-coat", "cart"].includes(product) && <>$260</>}

                {(product === "beauty-product-no-discount" ||
                  product === "cart-with-colour-chose" ||
                  product === "cart-with-no-discount" ||
                  product === "dog-food-no-discount" ||
                  product === "dslr-camera-no-discount" ||
                  product === "gaming-control-color-choosing" ||
                  product === "kids-car-with-color-choosing" ||
                  product === "laptop-no-discount" ||
                  product === "man-jacket-color-choosing" ||
                  product === "product-5" ||
                  product === "soccer-boat-color-choosing") && (
                  <div className="element-6">
                    {[
                      "cart-with-colour-chose",
                      "cart-with-no-discount",
                      "kids-car-with-color-choosing",
                      "product-5",
                    ].includes(product) && <>$960</>}

                    {product === "dslr-camera-no-discount" && <>$360</>}

                    {product === "dog-food-no-discount" && <>$100</>}

                    {product === "laptop-no-discount" && <>$700</>}

                    {product === "beauty-product-no-discount" && <>$500</>}

                    {product === "soccer-boat-color-choosing" && <>$1160</>}

                    {["gaming-control-color-choosing", "man-jacket-color-choosing"].includes(product) && <>$660</>}
                  </div>
                )}
              </div>
              <div className="element-7">
                {[
                  "bestselling-guccibag",
                  "cart-hover",
                  "just-for-your-cart-bag",
                  "wishlist-cart-with-discount",
                ].includes(product) && <>$1160</>}

                {product === "bestselling-cooling-fan" && <>$170</>}

                {["bestselling-coat", "cart"].includes(product) && <>$360</>}

                {["beauty-product-no-discount", "cart-with-no-discount", "dslr-camera-no-discount"].includes(
                  product
                ) && <FourStar className="instance-node-4" />}

                {product === "dog-food-no-discount" && <ThreeStar className="instance-node-4" />}

                {[
                  "beauty-product-no-discount",
                  "cart-with-no-discount",
                  "dog-food-no-discount",
                  "dslr-camera-no-discount",
                ].includes(product) && (
                  <div className="element-8">
                    {product === "cart-with-no-discount" && <>(65)</>}

                    {product === "dslr-camera-no-discount" && <>(95)</>}

                    {product === "beauty-product-no-discount" && <>(145)</>}

                    {product === "dog-food-no-discount" && <>(35)</>}
                  </div>
                )}

                {[
                  "cart-with-colour-chose",
                  "kids-car-with-color-choosing",
                  "laptop-no-discount",
                  "product-5",
                  "soccer-boat-color-choosing",
                ].includes(product) && (
                  <>
                    <FiveStar className="instance-node-4" />
                    <div className="element-9">
                      {product === "laptop-no-discount" && <>(325)</>}

                      {["cart-with-colour-chose", "kids-car-with-color-choosing", "product-5"].includes(product) && (
                        <>(65)</>
                      )}

                      {product === "soccer-boat-color-choosing" && <>(35)</>}
                    </div>
                  </>
                )}

                {["gaming-control-color-choosing", "man-jacket-color-choosing"].includes(product) && (
                  <>
                    <FourHalfStar
                      className="instance-node-5"
                      img="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                      vector="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                      vector1="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                      vector2="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                    />
                    <div className="text-wrapper-11">(55)</div>
                  </>
                )}
              </div>
            </>
          )}

          {(product === "bestselling-bookself" ||
            product === "gamepad-wishlist" ||
            product === "jacket-with-wishlist" ||
            product === "just-for-your-cart-gamepad" ||
            product === "just-for-your-cart-keyboard" ||
            product === "just-for-your-cart-monitor" ||
            product === "wishlist-cart-with-no-discount") && (
            <div className="element-6">
              {product === "just-for-your-cart-gamepad" && <>$560</>}

              {product === "just-for-your-cart-keyboard" && <>$200</>}

              {product === "just-for-your-cart-monitor" && <>$1160</>}

              {product === "bestselling-bookself" && <>$360</>}

              {product === "wishlist-cart-with-no-discount" && <>$1960</>}

              {product === "gamepad-wishlist" && <>$550</>}

              {product === "jacket-with-wishlist" && <>$750</>}
            </div>
          )}
        </div>
        {(product === "bestselling-bookself" ||
          product === "bestselling-coat" ||
          product === "bestselling-cooling-fan" ||
          product === "bestselling-guccibag" ||
          product === "cart-hover" ||
          product === "cart" ||
          product === "just-for-your-cart-bag" ||
          product === "just-for-your-cart-gamepad" ||
          product === "just-for-your-cart-keyboard" ||
          product === "just-for-your-cart-monitor") && (
          <div className="frame-14">
            {(product === "bestselling-bookself" ||
              product === "bestselling-coat" ||
              product === "cart-hover" ||
              product === "cart" ||
              product === "just-for-your-cart-bag" ||
              product === "just-for-your-cart-gamepad" ||
              product === "just-for-your-cart-keyboard" ||
              product === "just-for-your-cart-monitor") && <FiveStar className="instance-node-4" />}

            {["bestselling-cooling-fan", "bestselling-guccibag"].includes(product) && (
              <FourHalfStar
                className="instance-node-5"
                img="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                vector="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                vector1="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
                vector2="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg"
              />
            )}

            <div className="text-wrapper-11">(65)</div>
          </div>
        )}

        {[
          "cart-with-colour-chose",
          "gaming-control-color-choosing",
          "kids-car-with-color-choosing",
          "man-jacket-color-choosing",
          "product-5",
          "soccer-boat-color-choosing",
        ].includes(product) && (
          <ColourChnage
            className="instance-node-5"
            ellipseClassName={`${product === "kids-car-with-color-choosing" && "class"} ${
              product === "soccer-boat-color-choosing" && "class-2"
            } ${product === "gaming-control-color-choosing" && "class-3"} ${
              product === "man-jacket-color-choosing" && "class-4"
            }`}
            ellipseClassNameOverride={colourChnageEllipseClassName}
          />
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  product: PropTypes.oneOf([
    "cart",
    "just-for-your-cart-gamepad",
    "cart-with-colour-chose",
    "dog-food-no-discount",
    "wishlist-cart-with-discount",
    "just-for-your-cart-keyboard",
    "laptop-no-discount",
    "man-jacket-color-choosing",
    "gaming-control-color-choosing",
    "bestselling-guccibag",
    "jacket-with-wishlist",
    "bestselling-bookself",
    "soccer-boat-color-choosing",
    "gamepad-wishlist",
    "beauty-product-no-discount",
    "wishlist-cart-with-no-discount",
    "bestselling-coat",
    "cart-hover",
    "bestselling-cooling-fan",
    "product-5",
    "kids-car-with-color-choosing",
    "dslr-camera-no-discount",
    "just-for-your-cart-bag",
    "just-for-your-cart-monitor",
    "cart-with-no-discount",
  ]),
};
