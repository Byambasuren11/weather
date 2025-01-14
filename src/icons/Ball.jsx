import * as React from "react";

const Ball = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="128"
    height="128"
    fill="none"
    viewBox="0 0 128 128"
  >
    <circle cx="64" cy="64" r="64" fill="#6E72C9"></circle>
    <circle
      cx="64"
      cy="64"
      r="64"
      fill="url(#paint0_radial_20_211)"
      fillOpacity="0.35"
      style={{ mixBlendMode: "overlay" }}
    ></circle>
    <defs>
      <radialGradient
        id="paint0_radial_20_211"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 0 64)scale(64)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export default Ball;
