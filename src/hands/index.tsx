import React from "react";
import { Icons } from "src/icons";
import Hand1 from "./hand-with-tube";
import Hand2 from "./hand2";

export default function hands(props: {
  fillColor: string;
  strokeColor: string;
  style: string;
  face: "default" | "narrow" | "rounder";
}) {
  const { fillColor, strokeColor, style, face } = props;
  switch (style) {
    case "handWithTube": {
      return (
        <Hand1 fillColor={fillColor} strokeColor={strokeColor} face={face} />
      );
    }
    case "hands2":
      return (
        <Hand2 fillColor={fillColor} strokeColor={strokeColor} face={face} />
      );

    default:
      return <></>;
  }
}
