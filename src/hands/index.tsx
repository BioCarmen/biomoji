import React from "react";
import { Icons } from "src/icons";
import HandWithBeer from "./hand-with-beer";
import HandWithPizza from "./hand-with-pizza";
import HandWithBurger from "./hand-with-burger";
import HandWithTube from "./hand-with-tube";
import Hand2 from "./hand2";
import HandWithTelescope from "./hand-with-telescope";
import HandWithArt from "./hand-with-art";
import HandWithCamera from "./hand-with-camera";
import HandWithHockey from "./hand-with-hockey";

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
        <HandWithTube
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
    case "handWithArt":
      return (
        <HandWithArt
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithCamera":
      return (
        <HandWithCamera
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithHockey":
      return (
        <HandWithHockey
          fillColor={fillColor}
          strokeColor={strokeColor}
          face={face}
          position={position}
          style={imageStyle}
        />
      );
    case "handWithTelescope":
      return (
        <HandWithTelescope
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
