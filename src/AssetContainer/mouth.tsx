import React from "react";
import { Icons } from "../icons";
import "./assets.scss";
import { mouthItems } from "./helper/constants";

export const MouthPanel = ({ handleMouthClick }) => {
  const assetClick = (style) => {
    handleMouthClick(style);
  };
  return (
    <div className="asset-panel">
      {mouthItems.map((item) => {
        return (
          <div>
            <img
              src={Icons.Mouth[item]}
              alt={item}
              onClick={() => assetClick(item)}
            />
          </div>
        );
      })}
      <div>
        <img
          src={Icons.Tabs.remove}
          alt="remove"
          onClick={() => assetClick("remove")}
          className="remove-icon"
        />
      </div>
    </div>
  );
};
