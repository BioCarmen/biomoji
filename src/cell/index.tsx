import React from "react";
import { Icons } from "src/icons";
import { adjustColor } from "src/utils";

import Cell1 from "./cell1";
import Dendrites from "./dendrites";
import Nuclei from "./nuclei";
import Beard from "./beard";
import Hair from "./hair";

export default function cell(props: {
  fillColor: string;
  strokeColor: string;
  style: string;
  face: "default" | "narrow" | "rounder";
}) {
  const { fillColor, strokeColor, style, face } = props;
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
          style={imageStyle}
        />
      );
    case "nuclei":
      return (
        <Nuclei
          fillColor={adjustColor(fillColor, -70)}
          strokeColor={strokeColor}
          face={face}
          style={imageStyle}
        />
      );
    case "beard":
      return (
        <Beard
          fillColor={adjustColor(fillColor, -70)}
          strokeColor={strokeColor}
          face={face}
          style={imageStyle}
        />
      );
    case "hair":
      return (
        <Hair
          fillColor={adjustColor(fillColor, -70)}
          strokeColor={strokeColor}
          face={face}
          style={imageStyle}
        />
      );
    default:
      return <></>;
  }
}
