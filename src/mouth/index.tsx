import React from "react";
import { Icons } from "src/icons";

export default function mouth(props: { style: string }) {
  const { style } = props;
  switch (style) {
    case "open":
      return (
        <img
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "-25%",
            left: "-2%",
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
            top: "-25%",
            left: "-2%",
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
            top: "-25%%",
            left: "-2%",
          }}
          src={Icons.Mouth.teethMouth}
        />
      );
  }
  return <></>;
}
