import React from "react";
import { Icons } from "src/icons";
import HandWithBeer from "./hand-with-beer";
import HandWithPizza from "./hand-with-pizza";
import HandWithBurger from "./hand-with-burger";
import Hand1 from "./hand-with-tube";
import Hand2 from "./hand2";

export default function hands(props: {
  fillColor: string;
  strokeColor: string;
  style: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
}) {
  const { fillColor, strokeColor, style, face, position } = props;
  let imageStyle;
  const top = "-5%";

  switch (position) {
    case "left":
      imageStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: top,
      };
      break;
    case "right":
      imageStyle = {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: top,
        transform: "scaleX(-1)",
      };
      break;
  }
  switch (style) {
    case "handWithTube": {
      return (
        <Hand1
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    }
    case "hands2":
      return (
        <Hand2
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithBeer":
      return (
        <HandWithBeer
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithPizza":
      return (
        <HandWithPizza
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithBurger":
      return (
        <HandWithBurger
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
