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
              d="M62.16,35.79c-6.51-.21-11,7.09-11.53,11-.36,2.62-.4,5.88,2.31,8C55.82,57,60.79,58,64,55.48c4.69-3.68,9.2-14.74,2.7-18.35A10,10,0,0,0,62.16,35.79Z"
              fill={fillColor}
              opacity="0.2"
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
              d="M40.83,26.4c-2.86.65-5.64,3.28-7,5.52A22.63,22.63,0,0,0,31.76,51c.88,2.51,2.47,5.06,5,5.76,5.3,1.43,8.46-4.49,9.91-8.49a26.49,26.49,0,0,0,.82-17,8.08,8.08,0,0,0-2-3.56A5,5,0,0,0,40.83,26.4Z"
              fill={fillColor}
              opacity="0.2"
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
              d="M35,39.58c-6.17,1-11.27,7.76-8.79,14.08,3.11,7.93,14.49,2.65,18-2.23C46.79,47.74,43.89,41.72,40,40A9.18,9.18,0,0,0,35,39.58Z"
              fill={fillColor}
              opacity="0.2"
            />
          </g>
        </svg>
      );
  }
}
