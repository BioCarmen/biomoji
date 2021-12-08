import React, { useEffect } from "react";
import { Icons } from "src/icons";

export default function accessories(props: {
  type: string;
  position: number;
  selected: boolean;
}) {
  const { type, position, selected } = props;

  let style = {
    width: "100%",
    height: "60%",
    position: "absolute",
    top: "-30%",
    left: "-10%",
    transform: "scaleX(-1)",
  };
  switch (position) {
    case 1:
      style = {
        width: "100%",
        height: "60%",
        position: "absolute",
        top: "-30%",
        left: "-10%",
        transform: "scaleX(-1)",
      };
      break;
    case 2:
      style = {
        width: "100%",
        height: "60%",
        position: "absolute",
        top: "-30%",
        left: "10%",
      };
      break;
    case 3:
      style = {
        width: "100%",
        height: "60%",
        position: "absolute",
        top: "30%",
        left: "10%",
      };
      break;
    case 4:
      style = {
        width: "100%",
        height: "60%",
        position: "absolute",
        top: "30%",
        left: "-10%",
        transform: "scaleX(-1)",
      };
      break;
  }

  switch (type) {
    case "cat": {
      return <img style={style} src={Icons.Accessories.cat}></img>;
    }
    case "dog":
      return <img style={style} src={Icons.Accessories.dog}></img>;

    case "laptop":
      return <img style={style} src={Icons.Accessories.laptop}></img>;
    default:
      return <></>;
  }
}
