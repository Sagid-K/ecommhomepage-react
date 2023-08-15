ecomimport React from "react";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { CartWithFlat } from "../../components/CartWithFlat";
import { CategoryPhone } from "../../components/CategoryPhone";
import { CategoryRectangle } from "../../components/CategoryRectangle";
import { FillEye } from "../../components/FillEye";
import { FillHeart } from "../../components/FillHeart";
import { FillWithLeftArrow } from "../../components/FillWithLeftArrow";
import { FillWithRight } from "../../components/FillWithRight";
import { FillWithUpArrow } from "../../components/FillWithUpArrow";
import { FlashSaleTimer } from "../../components/FlashSaleTimer";
import { FlashSellTimer } from "../../components/FlashSellTimer";
import { Footer } from "../../components/Footer";
import { FourStar } from "../../components/FourStar";
import { FullServices } from "../../components/FullServices";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { Line } from "../../components/Line";
import { TopHeader } from "../../components/TopHeader";
import { CategoryCamera } from "../../icons/CategoryCamera";
import { CategoryCellphone } from "../../icons/CategoryCellphone";
import { CategoryComputer } from "../../icons/CategoryComputer";
import { CategoryGamepad2 } from "../../icons/CategoryGamepad2";
import { CategoryHeadphone1 } from "../../icons/CategoryHeadphone1";
import { CategorySmartwatch3 } from "../../icons/CategorySmartwatch3";
import { Dropdown1 } from "../../icons/Dropdown1";
import { IconCustomerService1 } from "../../icons/IconCustomerService1";
import { IconsArrowRight4 } from "../../icons/IconsArrowRight4";
import "./style.css";

export const ECommerceHomepage = () => {
  return (
    <div className="e-commerce-homepage">
      <div className="div-4">
        <img
          className="line-2"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-5-1.svg"
        />
        <img
          className="line-3"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-5-1.svg"
        />
        <div className="overlap-4">
          <div className="overlap-5">
            <img
              className="line-4"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-4.svg"
            />
            <Line className="design-component-instance-node-4" />
          </div>
          <div className="frame-36">
            <div className="frame-37">
              <div className="text-wrapper-31">Woman’s Fashion</div>
              <Dropdown1 className="icon-instance-node-3" />
            </div>
            <div className="frame-38">
              <div className="text-wrapper-31">Men’s Fashion</div>
              <Dropdown1 className="icon-instance-node-3" />
            </div>
            <div className="text-wrapper-32">Electronics</div>
            <div className="text-wrapper-32">Home &amp; Lifestyle</div>
            <div className="text-wrapper-32">Medicine</div>
            <div className="text-wrapper-32">Sports &amp; Outdoor</div>
            <div className="text-wrapper-32">Baby’s &amp; Toys</div>
            <div className="text-wrapper-32">Groceries &amp; Pets</div>
            <div className="text-wrapper-32">Health &amp; Beauty</div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-6">
              <div className="overlap-7">
                <div className="overlap-8">
                  <img
                    className="hero-endframe"
                    alt="Hero endframe"
                    src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
                  />
                  <div className="frame-39">
                    <div className="ellipse-7" />
                    <div className="ellipse-7" />
                    <div className="group-4">
                      <div className="overlap-group-10">
                        <div className="ellipse-8" />
                        <div className="ellipse-9" />
                      </div>
                    </div>
                    <div className="ellipse-7" />
                    <div className="ellipse-7" />
                  </div>
                </div>
                <p className="text-wrapper-33">Up to 10% off Voucher</p>
              </div>
              <div className="frame-40">
                <img
                  className="element-apple-gray"
                  alt="Element apple gray"
                  src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/1200px-apple-gray-logo-1@2x.png"
                />
                <div className="text-wrapper-34">iPhone 14 Series</div>
              </div>
              <div className="frame-41">
                <div className="frame-42">
                  <div className="text-wrapper-35">Shop Now</div>
                  <img
                    className="line-5"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-5.svg"
                  />
                </div>
                <IconsArrowRight4 className="icon-instance-node-3" color="#FAFAFA" />
              </div>
            </div>
          </div>
        </div>
        <Button button="primary" className="button-instance" hover={false} />
        <div className="frame-43">
          <div className="overlap-9">
            <div className="ellipse-10" />
            <div className="JBL-BOOMBOX-HERO-wrapper">
              <img
                className="JBL-BOOMBOX-HERO"
                alt="Jbl BOOMBOX HERO"
                src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/jbl-boombox-2-hero-020-x1--1--1.png"
              />
            </div>
          </div>
          <div className="text-wrapper-36">Enhance Your Music Experience</div>
          <div className="frame-44">
            <FlashSellTimer
              className="flash-sell-timer-instance"
              divClassName="flash-sell-timer-2"
              divClassNameOverride="flash-sell-timer-2"
              flashSaleOffer="hours"
            />
            <FlashSellTimer
              className="flash-sell-timer-instance"
              divClassName="flash-sell-timer-2"
              divClassNameOverride="flash-sell-timer-2"
              flashSaleOffer="days-fill"
            />
            <FlashSellTimer
              className="flash-sell-timer-instance"
              divClassName="flash-sell-timer-2"
              divClassNameOverride="flash-sell-timer-2"
              flashSaleOffer="minutes"
            />
            <FlashSellTimer
              className="flash-sell-timer-instance"
              divClassName="flash-sell-timer-2"
              divClassNameOverride="flash-sell-timer-2"
              flashSaleOffer="seconds"
            />
          </div>
          <Button button="primary" className="button-2" hover={false} text="Buy Now!" />
          <div className="text-wrapper-37">Categories</div>
        </div>
        <div className="frame-45">
          <div className="frame-46">
            <div className="frame-47">
              <div className="frame-48">
                <div className="frame-49">
                  <CategoryRectangle className="rectangle" />
                  <div className="text-wrapper-38">Today’s</div>
                </div>
                <div className="text-wrapper-39">Flash Sales</div>
              </div>
              <FlashSaleTimer />
            </div>
            <div className="frame-50">
              <FillWithLeftArrow />
              <FillWithRight />
            </div>
          </div>
          <div className="frame-51">
            <CartWithFlat className="design-component-instance-node-5" property1="cart-with-discount" />
            <CartWithFlat
              ak="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ak-900-01-500x500-1@2x.png"
              akClassName="cart-with-flat-instance"
              className="design-component-instance-node-5"
              frameClassName="cart-with-flat-discount"
              property1="cart-with-discount-hover"
            />
            <CartWithFlat className="design-component-instance-node-5" property1="variant-3" />
            <CartWithFlat
              className="design-component-instance-node-5"
              fourHalfStarImgClassName="cart-with-flat-discount-instance"
              fourHalfStarImgClassNameOverride="cart-with-flat-discount-instance"
              fourHalfStarVectorClassName="cart-with-flat-discount-instance"
              fourHalfStarVectorClassNameOverride="cart-with-flat-discount-instance"
              property1="variant-4"
            />
            <CartWithFlat
              className="design-component-instance-node-5"
              fourHalfStarImgClassName="cart-with-flat-discount-instance"
              fourHalfStarImgClassNameOverride="cart-with-flat-discount-instance"
              fourHalfStarVectorClassName="cart-with-flat-discount-instance"
              fourHalfStarVectorClassNameOverride="cart-with-flat-discount-instance"
              property1="variant-4"
            />
            <CartWithFlat
              className="design-component-instance-node-5"
              fourHalfStarImg="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-23@2x.png"
              fourHalfStarImgClassName="cart-with-flat-discount-instance"
              fourHalfStarImgClassNameOverride="cart-with-flat-discount-instance"
              fourHalfStarVector="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-23@2x.png"
              fourHalfStarVector1="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-23@2x.png"
              fourHalfStarVector2="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-23@2x.png"
              fourHalfStarVectorClassName="cart-with-flat-discount-instance"
              fourHalfStarVectorClassNameOverride="cart-with-flat-discount-instance"
              property1="variant-4"
            />
          </div>
        </div>
        <div className="frame-52">
          <div className="frame-53">
            <div className="frame-54">
              <div className="frame-49">
                <CategoryRectangle className="rectangle" />
                <div className="text-wrapper-38">Categories</div>
              </div>
              <div className="text-wrapper-40">Browse By Category</div>
            </div>
            <div className="frame-50">
              <FillWithLeftArrow />
              <FillWithRight />
            </div>
          </div>
          <div className="frame-55">
            <CategoryPhone
              categoryPhone="phone"
              hover={false}
              icon={<CategoryCellphone className="icon-instance-node-4" />}
            />
            <CategoryPhone
              categoryPhone="computer"
              hover={false}
              icon={<CategoryComputer className="category-computer" color="black" />}
            />
            <CategoryPhone
              categoryPhone="smart-watch"
              hover={false}
              icon={<CategorySmartwatch3 className="icon-instance-node-4" color="black" />}
            />
            <CategoryPhone
              categoryPhone="camera"
              hover
              icon={<CategoryCamera className="icon-instance-node-4" color="white" />}
            />
            <CategoryPhone
              categoryPhone="headphone"
              hover={false}
              icon={<CategoryHeadphone1 className="icon-instance-node-4" color="black" />}
            />
            <CategoryPhone
              categoryPhone="gaming"
              hover={false}
              icon={<CategoryGamepad2 className="icon-instance-node-4" color="black" />}
            />
          </div>
        </div>
        <div className="frame-56">
          <div className="frame-57">
            <div className="frame-54">
              <div className="frame-49">
                <CategoryRectangle className="rectangle" />
                <div className="text-wrapper-38">This Month</div>
              </div>
              <div className="text-wrapper-40">Best Selling Products</div>
            </div>
            <Button button="primary" className="design-component-instance-node-5" hover={false} text="View All" />
          </div>
          <div className="frame-55">
            <Cart className="design-component-instance-node-5" product="bestselling-coat" />
            <Cart className="design-component-instance-node-5" product="bestselling-guccibag" />
            <Cart className="design-component-instance-node-5" product="bestselling-cooling-fan" />
            <Cart className="design-component-instance-node-5" product="bestselling-bookself" />
          </div>
        </div>
        <div className="frame-58">
          <div className="frame-59">
            <div className="frame-60">
              <div className="frame-54">
                <div className="frame-49">
                  <CategoryRectangle className="rectangle" />
                  <div className="text-wrapper-38">Our Products</div>
                </div>
                <div className="text-wrapper-40">Explore Our Products</div>
              </div>
              <div className="frame-50">
                <FillWithLeftArrow />
                <FillWithRight />
              </div>
            </div>
            <div className="frame-61">
              <div className="frame-55">
                <Cart className="design-component-instance-node-5" product="dog-food-no-discount" />
                <Cart className="design-component-instance-node-5" product="dslr-camera-no-discount" />
                <Cart className="design-component-instance-node-5" product="laptop-no-discount" />
                <div className="div-5">
                  <div className="cart-2">
                    <div className="frame-62">
                      <FillHeart />
                      <FillEye />
                    </div>
                    <img
                      className="curology-jpkvqrtusm"
                      alt="Curology"
                      src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/curology-j7pkvqrtusm-unsplash-1-2@2x.png"
                    />
                  </div>
                  <div className="frame-63">
                    <div className="text-wrapper-41">Curology Product Set</div>
                    <div className="frame-64">
                      <div className="frame-65">
                        <div className="text-wrapper-42">$500</div>
                      </div>
                      <div className="frame-50">
                        <FourStar className="four-star-instance" />
                        <div className="text-wrapper-43">(145)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-55">
                <Cart
                  className="design-component-instance-node-5"
                  colourChnageEllipseClassName="cart-instance"
                  product="kids-car-with-color-choosing"
                />
                <Cart
                  className="design-component-instance-node-5"
                  colourChnageEllipseClassName="cart-instance"
                  product="soccer-boat-color-choosing"
                />
                <Cart
                  className="design-component-instance-node-5"
                  colourChnageEllipseClassName="cart-instance"
                  product="gaming-control-color-choosing"
                />
                <Cart
                  className="design-component-instance-node-5"
                  colourChnageEllipseClassName="cart-instance"
                  product="man-jacket-color-choosing"
                />
              </div>
            </div>
          </div>
          <Button
            button="primary"
            className="design-component-instance-node-5"
            hover={false}
            text="View All Products"
          />
        </div>
        <div className="frame-66">
          <div className="frame-54">
            <div className="frame-49">
              <CategoryRectangle className="rectangle" />
              <div className="text-wrapper-38">Featured</div>
            </div>
            <div className="text-wrapper-40">New Arrival</div>
          </div>
          <div className="frame-55">
            <div className="frame-67">
              <div className="overlap-group-11">
                <div className="frame-68">
                  <div className="div-5">
                    <div className="text-wrapper-44">PlayStation 5</div>
                    <p className="text-wrapper-45">Black and White version of the PS5 coming out on sale.</p>
                  </div>
                  <div className="frame-69">
                    <div className="text-wrapper-46">Shop Now</div>
                    <div className="line-wrapper">
                      <img
                        className="line-6"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-1-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-70">
              <div className="frame-71">
                <div className="overlap-group-12">
                  <img
                    className="attractive-woman"
                    alt="Attractive woman"
                    src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/attractive-woman-wearing-hat-posing-black-background-1@2x.png"
                  />
                  <div className="frame-72">
                    <div className="div-5">
                      <div className="text-wrapper-44">Women’s Collections</div>
                      <p className="text-wrapper-47">Featured woman collections that give you another vibe.</p>
                    </div>
                    <div className="frame-69">
                      <div className="text-wrapper-46">Shop Now</div>
                      <div className="line-wrapper">
                        <img
                          className="line-6"
                          alt="Line"
                          src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-1-5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-73">
                <div className="frame-74">
                  <div className="overlap-group-13">
                    <div className="element-amazon-wrapper">
                      <img
                        className="element-amazon"
                        alt="Element amazon"
                        src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/69-694768-amazon-echo-png-clipart-transparent-amazon-echo-png-1@2x.png"
                      />
                    </div>
                    <div className="frame-75">
                      <div className="frame-63">
                        <div className="text-wrapper-44">Speakers</div>
                        <div className="text-wrapper-48">Amazon wireless speakers</div>
                      </div>
                      <div className="frame-69">
                        <div className="text-wrapper-46">Shop Now</div>
                        <div className="line-wrapper">
                          <img
                            className="line-6"
                            alt="Line"
                            src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-1-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-76">
                  <div className="overlap-10">
                    <div className="element-wrapper">
                      <img
                        className="element-e-cd-aa"
                        alt="Element"
                        src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/652e82cd70aa6522dd785109a455904c@2x.png"
                      />
                    </div>
                    <div className="frame-75">
                      <div className="frame-63">
                        <div className="text-wrapper-44">Perfume</div>
                        <div className="text-wrapper-48">GUCCI INTENSE OUD EDP</div>
                      </div>
                      <div className="frame-69">
                        <div className="text-wrapper-46">Shop Now</div>
                        <div className="line-wrapper">
                          <img
                            className="line-6"
                            alt="Line"
                            src="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/line-1-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FullServices
          className="full-services-instance"
          servicesCustomerIcon={<IconCustomerService1 className="icon-customer-service-1" color="white" />}
          visible={false}
        />
        <Footer
          className="footer-instance"
          googlePlayImg="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-2.svg"
          googlePlayVector="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-3.svg"
          googlePlayVector1="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-4.svg"
          googlePlayVector2="https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-1.svg"
        />
        <TopHeader className="design-component-instance-node-4" />
        <HeaderWrapper
          className="header-instance"
          frameClassName="header-2"
          visible={false}
          withBuyCart="off"
          withBuyCartOnClassName="header-3"
        />
        <FillWithUpArrow className="fill-with-up-arrow-instance" />
      </div>
    </div>
  );
};
