import React from "react";

export default function handWithArt(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
  style;
}) {
  const { fillColor, strokeColor, face, position, style } = props;
  const ele = (
    <g id="Isolation_Mode" data-name="Isolation Mode">
      <path
        d="M25.69,60.64c-2-1.06-4.4-1.42-6.57-2.15a18,18,0,0,1-3.21-1.31,6.18,6.18,0,0,1-2.47-2.39c-1.54-2.93,2.25-3,4.12-2.81A29.72,29.72,0,0,0,25,52"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.73,42.68l5.44,24.59a1.38,1.38,0,0,1-1.05,1.65,1.39,1.39,0,0,1-1.6-.88L8,44.34a3,3,0,0,1,5.63-2C13.66,42.43,13.7,42.56,13.73,42.68Z"
        fill="#755543"
        stroke="#513819"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.41,41.31,15,44.07a.84.84,0,0,1-.18.73A6.47,6.47,0,0,1,8.2,46.59a.77.77,0,0,1-.53-.52l-.93-2.71a.83.83,0,0,1,.57-1.06l6.08-1.61A.83.83,0,0,1,14.41,41.31Z"
        fill="#ddd"
        stroke="#706a62"
        stroke-miterlimit="10"
      />
      <path
        d="M8.15,42.82c-2.86-.9-4.68-4.39-4.76-7.36a23.81,23.81,0,0,1,1.22-6.64,4.92,4.92,0,0,0,3.2,3.29A8,8,0,0,1,10.88,34a3.32,3.32,0,0,0-1.42-1.63,5.86,5.86,0,0,1,3.84,2.07,5.44,5.44,0,0,1-.14,7.14A5,5,0,0,1,8.15,42.82Z"
        fill="#e2cca8"
      />
      <path
        d="M13.65,35a.83.83,0,0,0-.07-.13,5.28,5.28,0,0,0-2.9-2.22,6.17,6.17,0,0,0-1.22-.27A3.32,3.32,0,0,1,10.88,34a8,8,0,0,0-3.07-1.87,4.92,4.92,0,0,1-3.2-3.29,23.81,23.81,0,0,0-1.22,6.64,9.23,9.23,0,0,0,2,5.39.32.32,0,0,0,.14.12.48.48,0,0,0,.29,0,.91.91,0,0,1,.68.12c.3.19.53.58.88.54a.61.61,0,0,0,.49-.56c.08-.46-.18-1.15.25-1.51a.76.76,0,0,1,.94.08,2.58,2.58,0,0,1,.58.84,1.93,1.93,0,0,0,.63.8.59.59,0,0,0,.66,0,.67.67,0,0,0,.13-.67c-.15-.62-.63-1.22-.43-1.83a.86.86,0,0,1,1-.56c.71.12,1.23.14,1.47-.67.19-.64-.12-1.55.32-2.07.1-.13.24-.24.24-.4A.28.28,0,0,0,13.65,35Z"
        fill="#9e81cc"
      />
      <path
        d="M13.68,35a5.4,5.4,0,0,1-.52,6.61,5,5,0,0,1-5,1.26A5.79,5.79,0,0,1,5.51,41"
        fill="none"
        stroke="#b29366"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.51,41a9.24,9.24,0,0,1-2.12-5.54,23.81,23.81,0,0,1,1.22-6.64,4.92,4.92,0,0,0,3.2,3.29A8,8,0,0,1,10.88,34a3.32,3.32,0,0,0-1.42-1.63,5.86,5.86,0,0,1,3.84,2.07,4.7,4.7,0,0,1,.38.53"
        fill="none"
        stroke="#5d4191"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.42,33.82a6.19,6.19,0,0,0,.69,4.7"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.78,26.75c-.51-1.06-.67-3.17.91-3.39,1.83-.26,1.42,2.14,1.15,3.2a3.55,3.55,0,0,0,.38,2.81C7.3,29.2,6.17,27.57,5.78,26.75Z"
        fill="#9e81cc"
        stroke="#5d4191"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.58,59a2.4,2.4,0,0,0,1.05-1.15c1.31-2.72-.91-11.12-4.67-7C7.67,53.39,9.42,61.07,13.58,59Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );

  switch (face) {
    case "default":
      style.top = "-10%";
      if (position === "left") {
        style.left = "-1%";
      } else {
        style.left = "-1%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
    case "narrow":
      style.top = "-10%";
      if (position === "left") {
        style.left = "1%";
      } else {
        style.left = "-4%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
    case "rounder":
      style.top = "-10%";
      if (position === "left") {
        style.left = "-5%";
      } else {
        style.left = "8%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
  }
}
