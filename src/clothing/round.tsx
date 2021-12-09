import React from "react";

export default function round() {
  const ele = (
    <g id="eyes">
      <ellipse
        cx="38.31"
        cy="49.76"
        rx="7.31"
        ry="4.97"
        fill="#fff"
        opacity="0.3"
      />
      <ellipse
        cx="60.23"
        cy="49.76"
        rx="7.31"
        ry="4.97"
        fill="#fff"
        opacity="0.3"
      />
      <ellipse
        cx="38.31"
        cy="49.76"
        rx="7.31"
        ry="4.97"
        fill="none"
        stroke="#141414"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.43"
      />
      <ellipse
        cx="60.23"
        cy="49.76"
        rx="7.31"
        ry="4.97"
        fill="none"
        stroke="#141414"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.43"
      />
      <path
        d="M46.1,49.87l.18-.06a10.43,10.43,0,0,1,6,.06h0"
        fill="none"
        stroke="#141414"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.43"
      />
      <ellipse
        cx="35.79"
        cy="48.61"
        rx="1.6"
        ry="1.09"
        fill="#fff"
        opacity="0.3"
      />
      <ellipse
        cx="57.72"
        cy="48.61"
        rx="1.6"
        ry="1.09"
        fill="#fff"
        opacity="0.3"
      />
    </g>
  );
  return (
    <svg
      style={{
        width: "140%",
        height: "110%",
        position: "absolute",
        top: "-62%",
        left: "2%",
      }}
      width="152"
      height="65"
      viewBox="0 0 152 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {ele}
    </svg>
  );
}
