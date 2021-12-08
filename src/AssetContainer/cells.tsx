import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const CellsPanel = ({ handleCellClick }) => {
  const assetClick = (style) => {
    handleCellClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Cells.cell1}
          alt="cell1"
          onClick={() => assetClick("cell1")}
        />
      </div>

      <div>
        <img
          src={Icons.Cells.dendrites}
          alt="dendrites"
          onClick={() => assetClick("dendrites")}
        />
      </div>
    </div>
  );
};
