import React from "react";

export default function beanie(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
}) {
  const { fillColor, strokeColor, face } = props;
  const appliedFillColor = fillColor ?? "#434444";
  const appliedStrokeColor = strokeColor ?? "#1e2223";
  let style;
  const ele = (
    <g id="eyes">
      <path
        d="M29.28,23c.34-.29.69-.58,1.06-.86a33,33,0,0,1,4.47-2.85c1.53-.82.48-2.26,1.77-2.9a3,3,0,0,0,2-2.2c1.05-2.7,5.27-4.25,9.75-4.8,5.57-.67,11.15-1.08,14.37,2.26C64,13,64,15.5,64,17a.43.43,0,0,0,.07.29,1.34,1.34,0,0,0,.62.31c2.34.79,2.55,2.3,3.4,3.68,2.5,4.1,6,7.53,5.75,12.06a2.94,2.94,0,0,1-.72,2c-1.27,1.35-3.63.92-5.91.91-2.85,0-5.71,0-8.56.07-10,.19-19.89.7-29.91.68-1.51,0-4,.31-5.12-.47-1.86-1.31-.47-4.65.06-6.14A18.14,18.14,0,0,1,29.28,23Z"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M22.42,39c-.07,1.07,0,2.15,1.64,2.44a10.21,10.21,0,0,0,3.56-.25c7.44-1.35,15-1.1,22.67-1,7.09.06,14.18.33,21.22.8,1.21.08,3.28.28,4.22-.3s.86-1.72.91-2.42a13.45,13.45,0,0,1,0-1.42c.13-.67.9-1.27.29-1.93a4,4,0,0,0-1.43-.83c-3.9-1.55-9.05-2-13.61-2.37a135.35,135.35,0,0,0-22.42.13q-5.59.48-11.06,1.33c-2.21.35-8,.61-7.18,2.59.19.5.86.89,1.1,1.38A4.2,4.2,0,0,1,22.42,39Z"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M26.83,33.81a7.41,7.41,0,0,0,.47,3.53c.46,1.08,1.51,2.06,1.76,3.17a.66.66,0,0,1,0,.14.13.13,0,0,0,.15.09c.07,0,.05-.1,0-.08"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M35,32.67c.06,0,0-.08-.09-.07a.12.12,0,0,0-.09.11,9.9,9.9,0,0,0,1.06,5.89,1.84,1.84,0,0,1,.32,1.08v-.22"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M44.46,31.72c-1.63,2.57.87,5.5-.31,8.15"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M54.09,31.47c-.38,1.82.86,3.68.37,5.5-.28,1.05-1.12,2-1.35,3.08v0"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M71.83,33a1.08,1.08,0,0,1,0,1.56c-.24.27-.61.5-.76.8a1.24,1.24,0,0,0,0,.89,4.64,4.64,0,0,1-.88,4.22.13.13,0,0,1-.12,0c-.06,0,0-.07,0,0"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
      <path
        d="M64,32.1c.59.84.17,1.41-.14,2.24a4.82,4.82,0,0,0-.11,2.86c.23,1,.59,2-.13,3"
        fill={appliedFillColor}
        stroke={appliedStrokeColor}
        stroke-miterlimit="10"
      />
    </g>
  );
  switch (face) {
    case "default":
      style = {
        width: "120%",
        height: "100%",
        position: "absolute",
        top: "-55%",
        left: "6%",
      };
      break;
    case "narrow":
      style = {
        width: "115%",
        height: "100%",
        position: "absolute",
        top: "-58%",
        left: "9%",
      };
      break;
    case "rounder":
      style = {
        width: "140%",
        height: "100%",
        position: "absolute",
        top: "-55%",
        left: "2%",
      };
      break;
  }

  return (
    <svg
      style={style}
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
