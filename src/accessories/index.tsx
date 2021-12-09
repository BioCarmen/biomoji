import React, { useEffect } from "react";
import { accessoriesItem } from "src/AssetContainer/helper/constants";
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
        left: "-15%",
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
        left: "-15%",
        transform: "scaleX(-1)",
      };
      break;
  }

  if (accessoriesItem.includes(type)) {
    return <img style={style} src={Icons.Accessories[type]} />;
  } else {
    return <></>;
  }
}
