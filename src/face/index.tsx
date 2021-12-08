import React from "react";
import Icon from "src/components/Icon";
import { Icons } from "src/icons";

export default function face(props: {
  fillColor: string;
  strokeColor: string;
  shape: string;
}) {
  const { fillColor, shape, strokeColor } = props;

  switch (shape) {
    case "rounder": {
      return <Icon name="rounder-face" fill={fillColor} stroke={strokeColor} />;
    }
    case "narrow":
      return <Icon name="narrow-face" fill={fillColor} stroke={strokeColor} />;

    case "default":
      return <Icon name="default-face" fill={fillColor} stroke={strokeColor} />;
    default:
      return <></>;
  }
}
