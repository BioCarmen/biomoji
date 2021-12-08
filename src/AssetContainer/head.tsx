import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const HeadPanel = ({ handleClick }) => {
  const assetClick = (style) => {
    handleClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Face.defaultFace}
          alt="default face"
          onClick={() => assetClick("default")}
        />
      </div>
      <div>
        <img
          src={Icons.Face.narrowFace}
          alt="narrow face"
          onClick={() => assetClick("narrow")}
        />
      </div>
      <div>
        <img
          src={Icons.Face.rounderFace}
          alt="rounder face"
          onClick={() => assetClick("rounder")}
        />
      </div>
    </div>
  );
};
