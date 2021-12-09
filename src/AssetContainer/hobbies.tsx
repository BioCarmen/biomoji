import React from "react";
import { Icons } from "../icons";
import "./assets.scss";

export const HobbiesPanel = ({ handleAccessoriesClick }) => {
  const assetClick = (style) => {
    handleAccessoriesClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Tabs.remove}
          alt="remove"
          onClick={() => assetClick("")}
          className="remove-icon"
        />
      </div>
    </div>
  );
};
