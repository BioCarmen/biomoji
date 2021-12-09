import React from "react";

export default function handWithCamera(props: {
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
        d="M26,51.32a9.34,9.34,0,0,1-4-1.38A19.81,19.81,0,0,0,19.39,48,12.31,12.31,0,0,0,14,46.7a3.38,3.38,0,0,0-1.73.53,1.75,1.75,0,0,0-.77,1.58,2.39,2.39,0,0,0,.29.81c2.85,5.61,9.58,9.31,14.46,13"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.34,42.76h3.44a.34.34,0,0,1,.34.34v.44a0,0,0,0,1,0,0H21a0,0,0,0,1,0,0V43.1A.34.34,0,0,1,21.34,42.76Z"
        transform="translate(8.85 -3.67) rotate(11.24)"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="24.77"
        y1="43.09"
        x2="24.62"
        y2="43.86"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="24.16"
        y1="42.97"
        x2="24.01"
        y2="43.73"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="23.55"
        y1="42.85"
        x2="23.4"
        y2="43.61"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="22.94"
        y1="42.73"
        x2="22.79"
        y2="43.49"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="22.33"
        y1="42.61"
        x2="22.18"
        y2="43.37"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="21.73"
        y1="42.49"
        x2="21.57"
        y2="43.25"
        fill="none"
        stroke="#f4f4f4"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="24.69"
        y1="43.07"
        x2="24.53"
        y2="43.84"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="24.08"
        y1="42.95"
        x2="23.93"
        y2="43.72"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="23.47"
        y1="42.83"
        x2="23.32"
        y2="43.6"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="22.86"
        y1="42.71"
        x2="22.71"
        y2="43.48"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="22.25"
        y1="42.59"
        x2="22.1"
        y2="43.35"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <line
        x1="21.64"
        y1="42.47"
        x2="21.49"
        y2="43.23"
        fill="#d3d3d3"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M21.34,42.76h3.44a.34.34,0,0,1,.34.34v.44a0,0,0,0,1,0,0H21a0,0,0,0,1,0,0V43.1A.34.34,0,0,1,21.34,42.76Z"
        transform="translate(8.85 -3.67) rotate(11.24)"
        fill="none"
        stroke="#474747"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M12.73,41.49l.91-.93a1.06,1.06,0,0,1,.94-.29l3.34.67a1,1,0,0,1,.78.69l.37,1.12Z"
        fill="#353535"
      />
      <path d="M18.7,41.63a1,1,0,0,0-.78-.69l-1.16-.24a1.06,1.06,0,0,1,.78.7l.36,1.12,1.17.23Z" />
      <path
        d="M3.64,50.61a1,1,0,0,0,.82,1.23l18.45,3.67a1,1,0,0,0,1.22-.83l1.26-6.35L4.9,44.26Z"
        fill="#c9c9c9"
        stroke="#212121"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M25.2,44,6.75,40.3a1,1,0,0,0-1.22.83L4.9,44.26l20.49,4.07L26,45.2A1,1,0,0,0,25.2,44Z"
        fill="#353535"
        stroke="#212121"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M25.2,44l-1.26-.25a.71.71,0,0,1,0,.25L23.3,47.1,22,53.45a1,1,0,0,1-1.22.83L3.62,50.86a1,1,0,0,0,.84,1l18.45,3.67a1,1,0,0,0,1.22-.83l1.26-6.35L26,45.2A1,1,0,0,0,25.2,44Z"
        opacity="0.2"
      />
      <ellipse
        cx="15.21"
        cy="47.9"
        rx="4.75"
        ry="4.71"
        transform="translate(-34.74 53.49) rotate(-78.76)"
        opacity="0.2"
      />
      <ellipse
        cx="14.62"
        cy="47.44"
        rx="4.75"
        ry="4.71"
        transform="translate(-34.76 52.54) rotate(-78.76)"
        fill="#353535"
        stroke="#212121"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <ellipse
        cx="14.62"
        cy="47.44"
        rx="4.24"
        ry="4.2"
        transform="translate(-34.76 52.54) rotate(-78.76)"
        fill="#5b5b5b"
        stroke="#282828"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.35"
      />
      <ellipse
        cx="14.62"
        cy="47.44"
        rx="3.33"
        ry="3.3"
        transform="translate(-34.76 52.54) rotate(-78.76)"
        fill="#2d2d2d"
      />
      <ellipse
        cx="14.62"
        cy="47.44"
        rx="3.33"
        ry="3.3"
        transform="translate(-34.76 52.54) rotate(-78.76)"
        fill="#2d2d2d"
      />
      <path
        d="M11.8,47.23a3.32,3.32,0,0,1,3.89-2.63,3.25,3.25,0,0,1,1.49.72A3.32,3.32,0,1,0,12.48,50,3.37,3.37,0,0,1,11.8,47.23Z"
        fill="#111"
      />
      <path
        d="M12.61,48.7a.39.39,0,0,0,.28.08c.23,0,.35-.29.42-.51a2.33,2.33,0,0,1,.5-1.13,1.4,1.4,0,0,1,1.23-.2,3.78,3.78,0,0,0,.82.12.78.78,0,0,0,.75-1,1.06,1.06,0,0,0-.34-.47,2.51,2.51,0,0,0-3-.22,2.55,2.55,0,0,0-.94,2.89A.94.94,0,0,0,12.61,48.7Z"
        fill="#111"
      />
      <path
        d="M16.54,48.53a.58.58,0,0,0-.07-.21.55.55,0,0,0-.49-.25,1.42,1.42,0,0,0-.56.15,5.28,5.28,0,0,0-1.25.74.65.65,0,0,0-.27.36.45.45,0,0,0,.3.46,1.14,1.14,0,0,0,.58,0,3.17,3.17,0,0,0,.92-.22C16.07,49.44,16.6,49,16.54,48.53Z"
        fill="#111"
      />
      <path
        d="M16.68,48.75a2.46,2.46,0,0,1-1.44,1.07"
        fill="none"
        stroke="#bababa"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.35"
      />
      <path
        d="M12.24,47A2.44,2.44,0,0,1,15.1,45a3.23,3.23,0,0,1,.47.15"
        fill="none"
        stroke="#bababa"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.35"
      />
      <path
        d="M7.37,40.43l.46-.55a.48.48,0,0,1,.45-.16l1.13.22a.49.49,0,0,1,.35.32L10,41Z"
        fill="#020202"
      />
      <rect
        x="6.3"
        y="41.81"
        width="3.32"
        height="1.6"
        rx="0.27"
        transform="translate(8.46 -0.73) rotate(11.24)"
        fill="#fdffcc"
      />
      <path
        d="M10.37,49a4.58,4.58,0,0,1,4.73-6.16,6.3,6.3,0,0,1,1.27.35,4.63,4.63,0,0,0-6,5.81Z"
        fill="#5b5b5b"
      />
      <path d="M8.19,39.71h.09l1.12.22a.49.49,0,0,1,.36.32L10,41l2.75.54.91-.93a1.05,1.05,0,0,1,.74-.31l.2,0,3.34.67a1,1,0,0,1,.66.44.75.75,0,0,1,.07.12.69.69,0,0,1,.05.13l.37,1.12,1.89.38.09-.43a.34.34,0,0,1,.33-.28h.06l3.37.67a.34.34,0,0,1,.27.4l-.09.43.21,0A1,1,0,0,1,26,45.2l-.62,3.13-1.26,6.35a1,1,0,0,1-1,.85l-.2,0L4.46,51.84l-.1,0h0l-.06,0h0l-.05,0,0,0-.05,0,0,0,0,0,0,0,0,0-.08-.08v0l0-.05,0,0,0-.06h0l0-.07h0a1.08,1.08,0,0,1-.11-.41h0a1.1,1.1,0,0,1,0-.25L4.9,44.26l.63-3.13a1,1,0,0,1,1-.85l.2,0,.62.13.46-.55a.46.46,0,0,1,.36-.17m0-.81h0a1.29,1.29,0,0,0-1,.46l-.15.18-.16,0a2,2,0,0,0-.35,0A1.87,1.87,0,0,0,4.73,41L4.11,44.1,2.85,50.45a1.71,1.71,0,0,0,0,.45,1.87,1.87,0,0,0,.18.73l.07.12a1.05,1.05,0,0,0,.08.13l.1.13h0l0,0,.14.14h0l0,0,.07.05.07,0h0l.05,0,.08.05h0l.05,0,.09,0h0l0,0,.11,0h.06l.17,0L22.75,56.3a2.19,2.19,0,0,0,.36,0,1.84,1.84,0,0,0,1.81-1.49l1.26-6.35.63-3.13a1.89,1.89,0,0,0-.92-2A1.14,1.14,0,0,0,25,42.31l-3.37-.67a.82.82,0,0,0-.22,0,1.13,1.13,0,0,0-1,.57l-.7-.14-.22-.67-.09-.23-.12-.21a1.88,1.88,0,0,0-1.18-.8l-3.34-.66-.36,0a1.84,1.84,0,0,0-1.31.55l-.61.62-1.86-.37L10.53,40a1.28,1.28,0,0,0-1-.87l-1.12-.22a1.07,1.07,0,0,0-.25,0Z" />
      <path
        d="M4.62,40.31A4.92,4.92,0,0,0,6.7,41.59a5.72,5.72,0,0,0,4.63-.46,3.93,3.93,0,0,0,1.76-2.07,3.86,3.86,0,0,0-2-4.31c-2.6-1-8.63.67-7.18,4.44A3.53,3.53,0,0,0,4.62,40.31Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.24,36.58q-2.37,2.69-3.51-.69c-.42,2.41-1.58,2.7-3.26,1.51,1.65,1.94,1,3-1.75,3.16,2.5,1.26,2.4,2.44.41,3.58,2.31-.81,3.24-.06,2.43,2.65,1.6-1.95,2.77-1.71,3.51.7.55-2.38,1.54-3.19,3.25-1.52-.84-2.44-.3-3.53,1.76-3.15-1.86-1.1-2-2.3-.42-3.59C10.05,39.88,9.05,39.17,10.24,36.58Z"
        fill="#fff878"
        opacity="0.5"
      />
      <path
        d="M9,38.78c-.9,1-1.57.88-2-.4-.23,1.37-.89,1.54-1.85.87.94,1.1.58,1.69-1,1.79,1.43.72,1.37,1.4.24,2.05,1.31-.47,1.84,0,1.38,1.51.91-1.11,1.58-1,2,.39.31-1.35.88-1.82,1.86-.86-.49-1.39-.18-2,1-1.8-1.06-.63-1.16-1.31-.24-2C8.91,40.66,8.34,40.25,9,38.78Z"
        fill="#fff"
        opacity="0.5"
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
        style.left = "-2%";
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
