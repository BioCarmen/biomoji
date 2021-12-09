import React, { useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const OwnColorPicker = ({ handleColor, colorType }) => {
  const [color, setColor] = useColor("hex", "#92dbe0");

  useEffect(() => {
    if (colorType === "fill") {
      handleColor("#92dbe0", "fill");
    } else {
      handleColor("#368c8e", "stroke");
    }
  }, [colorType]);

  useEffect(() => {
    handleColor(color);
  }, [color]);
  return (
    <ColorPicker
      width={300}
      height={100}
      color={color}
      onChange={setColor}
      hideHSV
      dark
      hideRGB
      hideHEX
    />
  );
};
