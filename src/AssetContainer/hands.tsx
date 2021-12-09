import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const HandsPanel = ({ handleHandsClick, handleChooseCurrentItem }) => {
  const assetClick = (style, item?) => {
    handleChooseCurrentItem(item ?? "");
    handleHandsClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Hands.hands1}
          alt="hand with tube"
          onClick={() => assetClick("handWithTube", "hand")}
        />
      </div>

      <div>
        <img
          src={Icons.Hands.handWithBeer}
          alt="hands 2"
          onClick={() => assetClick("handWithBeer", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithBurger}
          alt="hands 2"
          onClick={() => assetClick("handWithBurger", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithPizza}
          alt="handWithPizza"
          onClick={() => assetClick("handWithPizza", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithArt}
          alt="handWithArt"
          onClick={() => assetClick("handWithArt", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithCamera}
          alt="handWithCamera"
          onClick={() => assetClick("handWithCamera", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithTelescope}
          alt="handWithTelescope"
          onClick={() => assetClick("handWithTelescope", "hand")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithHockey}
          alt="handWithHockey"
          onClick={() => assetClick("handWithHockey", "hand")}
        />
      </div>

      <div>
        <img
          src={Icons.Tabs.remove}
          alt="remove"
          className="remove-icon"
          onClick={() => assetClick("")}
        />
      </div>
    </div>
  );
};
