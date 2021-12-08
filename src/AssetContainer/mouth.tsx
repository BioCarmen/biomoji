import React from "react";
import { Icons } from "../icons";
import "./assets.scss";

export const MouthPanel = ({ handleMouthClick }) => {
  const assetClick = (style) => {
    handleMouthClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Mouth.openMouth}
          alt="open mouth"
          onClick={() => assetClick("open")}
        />
      </div>

      <div>
        <img
          src={Icons.Mouth.smileMouth}
          alt="smile mouth"
          onClick={() => assetClick("smile")}
        />
      </div>
      <div>
        <img
          src={Icons.Mouth.teethMouth}
          alt="teeth mouth"
          onClick={() => assetClick("teeth")}
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
