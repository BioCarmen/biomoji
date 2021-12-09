import React from "react";
import { Icons } from "src/icons";

export default function eyes(props: { style: string }) {
  const { style } = props;
  switch (style) {
    case "eye1": {
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-30%",
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
            top: "-31%",
            left: "-1.5%",
          }}
          src={Icons.Eyes.eye2}
        ></img>
      );

    case "eye3":
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
    default:
      return <></>;
  }
}
