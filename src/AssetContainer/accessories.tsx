import React from "react";
import { Icons } from "../icons";
import "./assets.scss";
import { accessoriesItem } from "./helper/constants";

export const AccessoriesPanel = ({ handleAccessoriesClick }) => {
  const assetClick = (style) => {
    handleAccessoriesClick(style);
  };

  return (
    <div className="asset-panel">
      {accessoriesItem.map((item) => {
        return (
          <div>
            <img
              src={Icons.Accessories[item]}
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
          onClick={() => assetClick("")}
          className="remove-icon"
        />
      </div>
    </div>
  );
};
