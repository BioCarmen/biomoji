import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const EyesPanel = ({ handleEyeClick }) => {
  const assetClick = (style) => {
    handleEyeClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Eyes.eye1}
          alt="default face"
          onClick={() => assetClick("eye1")}
        />
      </div>

      <div>
        <img
          src={Icons.Eyes.eye2}
          alt="narrow face"
          onClick={() => assetClick("eye2")}
        />
      </div>

      <div>
        <img
          src={Icons.Eyes.eye3}
          alt="rounder face"
          onClick={() => assetClick("eye3")}
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
