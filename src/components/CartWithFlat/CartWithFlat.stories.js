import { CartWithFlat } from ".";

export default {
  title: "Components/CartWithFlat",
  component: CartWithFlat,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-3", "cart-with-discount-hover", "cart-with-discount"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    frameClassName: {},
    akClassName: {},
    ak:
      "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/ak-900-01-500x500-1-2@2x.png",
    fourHalfStarVectorClassName: {},
    fourHalfStarVectorClassNameOverride: {},
    fourHalfStarImgClassName: {},
    fourHalfStarImgClassNameOverride: {},
    fourHalfStarVector:
      "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
    fourHalfStarImg: "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
    fourHalfStarVector1:
      "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
    fourHalfStarVector2:
      "https://generation-sessions.s3.amazonaws.com/3c518dc4b6968a56ff7d98e40f0e2d97/img/vector-55.svg",
  },
};
