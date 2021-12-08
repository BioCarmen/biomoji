import React from "react";

export default function cell1(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
  style;
}) {
  const { fillColor, strokeColor, face, position, style } = props;
  switch (face) {
    case "default":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M32.35,26c-1.81.79-4.65-.12-6.22-1.3S22.88,20.12,20.42,21c-4.15,1.46-1.23,6.91.82,8.58A14.74,14.74,0,0,0,29.63,33"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.91,68.94c-2.35,2.47-5,3.2-8.09,4.14-1.68.51-4,1.82-2.88,4s5.11,1.42,7,1.22c3.14-.34,5.9-2.3,8.92-3.5"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M64.28,24.12c4-.4,4.55-2.94,6.8-5.83,1.14-1.47,3.56-2.79,4.67-.58,2.06,4.09-4.44,10-7.58,11.46"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M52.8,19.94c3.27-.73,3.81-2.86,5.39-5.26.82-1.23,2.33-3.14,3.93-3.1,2.45.06,1.95,2.47,1.41,4.08-.89,2.67-2.56,3.72-4.32,5.83"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M72.68,38.24c3.5-1.19,8.55-1.78,10.93,1.76.7,1,1.42,3.24.17,4.1s-2.8-.84-4-1.28A8.63,8.63,0,0,0,72,44.34"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M61.88,76.64c2.25,2.92,1.53,6.54,2.14,9.9a2.58,2.58,0,0,0,.69,1.53,1.91,1.91,0,0,0,2.49-.25,4.68,4.68,0,0,0,1.12-2.47c1-4.84-.11-9.07-2.44-13.32"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43.24,77.15C43,79.3,41.34,82,39.13,82.61c-1.48.41-4.94,0-4.3,2.81.26,1.16,1.59,1.72,2.77,1.9A11.47,11.47,0,0,0,50.46,79"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.33,38.17a4.19,4.19,0,0,1-3.84.21,19.86,19.86,0,0,1-3.44-2A7.11,7.11,0,0,0,14.34,35a2.61,2.61,0,0,0-2.23,1,2.68,2.68,0,0,0-.34,1.78c.23,2.25,2,4.05,4,5.19A14.55,14.55,0,0,0,25,44.84"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M45,21.28c.29-4-4.08-7.62-7.83-7.84a2.66,2.66,0,0,0-2.61,1.1,2.21,2.21,0,0,0,.43,2.3c1,1.21,2.63,1.72,3.72,2.84s1,2.41,1,3.88"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
    case "narrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M35.32,20.32c-1.81.79-4.65-.12-6.22-1.31s-3.26-4.59-5.71-3.72c-4.15,1.46-1.23,6.91.82,8.57a14.74,14.74,0,0,0,8.39,3.45"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M36.23,74.46c-2.35,2.47-5,3.19-8.09,4.14-1.68.5-4,1.82-2.88,4s5.11,1.41,7,1.22c3.15-.34,5.91-2.31,8.93-3.51"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M66.6,21.87c4-.4,4.55-2.93,6.8-5.82,1.14-1.47,3.56-2.79,4.67-.59,2.05,4.09-4.44,10-7.59,11.46"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M52.42,13.13c3.27-.72,3.81-2.85,5.39-5.25.82-1.23,2.33-3.14,3.93-3.1,2.45.06,1.95,2.46,1.41,4.08-.89,2.66-2.56,3.71-4.32,5.83"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M70.18,37.07c3.49-1.2,8.54-1.78,10.93,1.75.7,1,1.41,3.24.16,4.11s-2.8-.85-4-1.29a8.64,8.64,0,0,0-7.77,1.53"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M62.25,77.2c2.25,2.92,1.54,6.53,2.15,9.89a2.57,2.57,0,0,0,.68,1.53,1.92,1.92,0,0,0,2.5-.25A4.76,4.76,0,0,0,68.7,85.9c1-4.83-.11-9.06-2.45-13.31"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M47.42,83.74c-.24,2.16-1.91,4.84-4.12,5.46-1.48.42-4.94,0-4.3,2.82.26,1.16,1.6,1.71,2.78,1.9a11.49,11.49,0,0,0,12.86-8.35"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.8,40.94a4.19,4.19,0,0,1-3.84.21,20,20,0,0,1-3.45-2,7.05,7.05,0,0,0-3.71-1.35,2.58,2.58,0,0,0-2.22,1,2.68,2.68,0,0,0-.34,1.78c.23,2.25,2,4,4,5.19a14.55,14.55,0,0,0,9.24,1.85"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46.47,13.09c.3-4-4.07-7.63-7.83-7.84A2.63,2.63,0,0,0,36,6.34a2.22,2.22,0,0,0,.44,2.3c1,1.22,2.63,1.73,3.71,2.84s1,2.41,1,3.88"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
    case "rounder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <g id="Layer_1" data-name="Layer 1">
            <path
              d="M31.12,69.06c-2.35,2.47-5,3.2-8.09,4.14-1.68.51-4,1.82-2.88,4s5.11,1.42,7,1.22C30.26,78.12,33,76.16,36,75"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.46,26.44c4-.4,4.56-2.94,6.8-5.83,1.15-1.47,3.57-2.79,4.68-.58,2,4.09-4.44,10-7.59,11.46"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M50.17,21.08c3.27-.72,3.81-2.85,5.4-5.25.81-1.23,2.32-3.14,3.93-3.1,2.44.06,2,2.46,1.4,4.08-.89,2.66-2.56,3.71-4.32,5.83"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M82.55,39.92c3.49-1.2,8.54-1.78,10.93,1.76.7,1,1.41,3.24.16,4.1s-2.8-.85-4-1.28A8.6,8.6,0,0,0,81.84,46"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M66.06,74.8c2.25,2.92,1.53,6.53,2.15,9.89a2.54,2.54,0,0,0,.68,1.53A1.91,1.91,0,0,0,71.38,86,4.6,4.6,0,0,0,72.5,83.5c1-4.83-.11-9.07-2.44-13.31"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M48.54,74.71c-.23,2.16-1.9,4.84-4.12,5.46-1.48.42-4.93,0-4.3,2.82.27,1.16,1.6,1.71,2.78,1.9a11.47,11.47,0,0,0,12.86-8.35"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28,32.25a4.19,4.19,0,0,1-3.61-1.32A19.29,19.29,0,0,1,22,27.72,7.18,7.18,0,0,0,19.09,25a2.62,2.62,0,0,0-2.45.05,2.71,2.71,0,0,0-1,1.5c-.67,2.16.25,4.52,1.6,6.34A14.54,14.54,0,0,0,25,38.24"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.79,21.74c.3-4-4.07-7.62-7.83-7.84A2.63,2.63,0,0,0,32.36,15a2.21,2.21,0,0,0,.43,2.3c1,1.22,2.63,1.73,3.71,2.84s1,2.42,1,3.89"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
  }
}
