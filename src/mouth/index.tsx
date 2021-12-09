import React from "react";
import { Icons } from "src/icons";

export default function mouth(props: {
  style: string;
  sliderVal;
  sliderVerticalVal;
}) {
  const { style, sliderVal, sliderVerticalVal } = props;
  console.log(sliderVerticalVal);
  switch (style) {
    case "open":
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: `${25 + sliderVerticalVal - 25 - 10}%`,
            left: `${-2 + sliderVal - 50}%`,
          }}
          src={Icons.Mouth.openMouth}
        />
      );

    case "smile":
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: `${25 + sliderVerticalVal - 25 - 10}%`,
            left: `${-2 + sliderVal - 50}%`,
          }}
          src={Icons.Mouth.smileMouth}
        />
      );
    case "teeth":
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: `${25 + sliderVerticalVal - 25 - 10}%`,
            left: `${-2 + sliderVal - 50}%`,
          }}
          src={Icons.Mouth.teethMouth}
        />
      );
  }
  return <></>;
}
