import React from "react";
import { Icons } from "../icons";
import "./assets.scss";

export const AccessoriesPanel = ({ handleAccessoriesClick }) => {
  const assetClick = (style) => {
    handleAccessoriesClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Accessories.cat}
          alt="cat"
          onClick={() => assetClick("cat")}
        />
      </div>

      <div>
        <img
          src={Icons.Accessories.dog}
          alt="dog"
          onClick={() => assetClick("dog")}
        />
      </div>
      <div>
        <img
          src={Icons.Accessories.laptop}
          alt="cat"
          onClick={() => assetClick("laptop")}
        />
      </div>
      <div>
        <img
          src={Icons.Tabs.remove}
          alt="remove"
          onClick={() => assetClick("")}
        />
      </div>
    </div>
  );
};
