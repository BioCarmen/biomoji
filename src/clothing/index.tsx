import React from "react";

import Round from "./round";
import Flat from "./flat";
import BaseballCap from "./baseball-cap";
import Beanie from "./beanie";

export default function clothing(props: { colors; style: string; face }) {
  const { colors, style, face } = props;
  switch (style) {
    case "round":
      return <Round />;
    case "flat":
      return <Flat />;
    case "baseball-cap":
      return (
        <BaseballCap
          fillColor={colors["baseballCap"]?.fillColor}
          strokeColor={colors["baseballCap"]?.strokeColor}
          face={face}
        />
      );
    case "beanie":
      return (
        <Beanie
          fillColor={colors["beanie"]?.fillColor}
          strokeColor={colors["beanie"]?.strokeColor}
          face={face}
        />
      );
    default:
      return <></>;
  }
}
