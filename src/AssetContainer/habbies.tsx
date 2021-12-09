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
          src={Icons.Hobbies.beaker}
          alt="beaker"
          onClick={() => assetClick("beaker")}
        />
      </div>

      <div>
        <img
          src={Icons.Hobbies.hockeySide}
          alt="hocker"
          onClick={() => assetClick("hockey")}
        />
      </div>
      <div>
        <img
          src={Icons.Hobbies.microscope}
          alt="microscope"
          onClick={() => assetClick("microscope")}
        />
      </div>
      <div>
        <img
          src={Icons.Hobbies.skateboard}
          alt="skateboard"
          onClick={() => assetClick("skateboard")}
        />
      </div>

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
