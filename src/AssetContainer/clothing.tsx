import React from "react";
import { Icons } from "../icons";
import "./assets.scss";

export const ClothingPanel = ({
  handleClothingClick,
  handleChooseCurrentItem,
}) => {
  const assetClick = (style, item, detail?) => {
    handleChooseCurrentItem(detail ?? item);
    handleClothingClick(style, item);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Clothing.flat}
          alt="flat glasses"
          onClick={() => assetClick("flat", "glass")}
        />
      </div>

      <div>
        <img
          src={Icons.Clothing.round}
          alt="round"
          onClick={() => assetClick("round", "glass")}
        />
      </div>
      <div>
        <img
          src={Icons.Clothing.baseballCap}
          alt="baseball cap"
          onClick={() => assetClick("baseball-cap", "hat", "baseballCap")}
        />
      </div>
      <div>
        <img
          src={Icons.Clothing.beanie}
          alt="beanie"
          onClick={() => assetClick("beanie", "hat", "beanie")}
        />
      </div>
      <div>
        <img
          src={Icons.Tabs.remove}
          alt="remove"
          className="remove-icon"
          onClick={() => assetClick("", "remove")}
        />
      </div>
    </div>
  );
};
