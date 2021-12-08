import React from "react";
import { Icons } from "src/icons";

import Cell1 from "./cell1";
import Dendrites from "./dendrites";

export default function cell(props: {
  fillColor: string;
  strokeColor: string;
  style: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
}) {
  const { fillColor, strokeColor, style, face, position } = props;
  let imageStyle;
  imageStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };
  switch (style) {
    case "cell1": {
      return (
        <Cell1
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    }
    case "dendrites":
      return (
        <Dendrites
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );

    default:
      return <></>;
  }
}
