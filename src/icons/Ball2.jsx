import * as React from "react";

const Ball2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="184"
    height="184"
    fill="none"
    viewBox="0 0 184 184"
  >
    <g filter="url(#filter0_d_20_175)">
      <circle cx="92" cy="88" r="88" fill="#FF8E27"></circle>
      <circle
        cx="92"
        cy="88"
        r="88"
        fill="url(#paint0_radial_20_175)"
        fillOpacity="0.35"
        style={{ mixBlendMode: "overlay" }}
      ></circle>
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_20_175"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 2 90)scale(88)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </radialGradient>
      <filter
        id="filter0_d_20_175"
        width="184"
        height="184"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_20_175"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_20_175"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default Ball2;