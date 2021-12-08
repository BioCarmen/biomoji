import React from "react";
import { Icons } from "src/icons";

export default function eyes(props: { style: string }): SVGElement {
  const { style } = props;
  switch (style) {
    case "eye1": {
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-35%",
            left: "-3%",
          }}
          src={Icons.Eyes.eye1}
        ></img>
      );
    }
    case "eye2":
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-35%",
          }}
          src={Icons.Eyes.eye2}
        ></img>
      );

    default:
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "-2%",
            top: "-40%",
          }}
          src={Icons.Eyes.eye3}
        ></img>
      );
  }
}
