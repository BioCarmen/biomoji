import React from "react";

export default function nuclei(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";

  style;
}) {
  const { fillColor, strokeColor, face, style } = props;
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
              d="M35.66,35.08c1.68-.62,3.35-1.28,5-2,3.47-1.52,7.13-3.14,9.81-5.9-.22.22,3.48,2.54,3.81,2.71,4.63,2.43,10.1,3,15.25,2.88.91,0,1.81-.06,2.72-.11A24,24,0,0,0,61.91,20.79c-6.28-3.48-14.4-3.51-24.22-.39C30,22.86,25.45,29.3,23.55,37.09c1.14,0,2.28,0,3.42-.15A34.91,34.91,0,0,0,35.66,35.08Z"
              fill={fillColor}
              opacity="0.3"
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
              d="M45,22.88c.87-.51,1.72-1.06,2.55-1.62s1.68-1.19,2.51-1.79a1.5,1.5,0,0,1,.51-.28c.66-.17,1.91,2,2.41,2.43a11.32,11.32,0,0,0,3.22,2.12c4.31,1.88,9.4,1.88,14,1.58l.54,0a21.73,21.73,0,0,0-3.32-7.64,16.85,16.85,0,0,0-4.2-4.14c-7.73-5.37-19.67-4.81-27.15.37-4.83,3.35-6.73,8.23-7.46,13.52a30.27,30.27,0,0,0,11.1-1.94A35.28,35.28,0,0,0,45,22.88Z"
              fill={fillColor}
              opacity="0.3"
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
              d="M42.55,33.86c2.08-1.35,4.22-2.66,6.17-4.2.56-.44.61-.56,1.29-.39,1.55.4,3,1.49,4.41,2.15a30.12,30.12,0,0,0,5.24,1.83,56.14,56.14,0,0,0,20.82,1,41.49,41.49,0,0,0-17.33-12.9A36.73,36.73,0,0,0,50,18.66C36,18.49,24,29.15,19.77,42.1a47.43,47.43,0,0,0,15.35-4.16A55.86,55.86,0,0,0,42.55,33.86Z"
              fill={fillColor}
              opacity="0.3"
            />
          </g>
        </svg>
      );
  }
}
