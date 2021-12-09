import React from "react";
import { mouthItems } from "src/AssetContainer/helper/constants";
import { Icons } from "src/icons";

export default function mouth(props: {
  style: string;
  sliderVal;
  sliderVerticalVal;
}) {
  const { style, sliderVal, sliderVerticalVal } = props;
  if (mouthItems.includes(style)) {
    return (
      <img
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: `${25 + sliderVerticalVal - 25 - 10}%`,
          left: `${-2 + sliderVal - 50}%`,
        }}
        src={Icons.Mouth[style]}
      />
    );
  } else {
    return <></>;
  }
}
