import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const CellsPanel = ({ handleCellClick, handleChooseCurrentItem }) => {
  const assetClick = (style, item) => {
    handleChooseCurrentItem(item);
    handleCellClick(style);
  };
  return (
    <div className="asset-panel">
      <div>
        <img
          src={Icons.Cells.cell1}
          alt="cell1"
          onClick={() => assetClick("cell1", "cell")}
        />
      </div>

      <div>
        <img
          src={Icons.Cells.dendrites}
          alt="dendrites"
          onClick={() => assetClick("dendrites", "cell")}
        />
      </div>
      <div>
        <img
          src={Icons.Tabs.remove}
          className="remove-icon"
          alt="remove"
          onClick={() => assetClick("", "")}
        />
      </div>
    </div>
  );
};
