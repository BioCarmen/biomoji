import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const HandsPanel = ({ handleHandsClick }) => {
  const assetClick = (style) => {
    handleHandsClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Hands.hands1}
          alt="hand with tube"
          onClick={() => assetClick("handWithTube")}
        />
      </div>

      <div>
        <img
          src={Icons.Hands.handWithBeer}
          alt="hands 2"
          onClick={() => assetClick("handWithBeer")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithBurger}
          alt="hands 2"
          onClick={() => assetClick("handWithBurger")}
        />
      </div>
      <div>
        <img
          src={Icons.Hands.handWithPizza}
          alt="handWithPizza"
          onClick={() => assetClick("handWithPizza")}
        />
      </div>
    </div>
  );
};
