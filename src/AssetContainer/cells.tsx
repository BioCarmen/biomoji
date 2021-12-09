import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const CellsPanel = ({ handleCellClick, handleChooseCurrentItem }) => {
  const assetClick = (style, item) => {
    handleChooseCurrentItem(item);
    handleCellClick(style, item);
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
          src={Icons.Cells.beard}
          alt="beard"
          onClick={() => assetClick("beard", "cell-face")}
        />
      </div>
      <div>
        <img
          src={Icons.Cells.hair}
          alt="hair"
          onClick={() => assetClick("hair", "cell-face")}
        />
      </div>
      <div>
        <img
          src={Icons.Cells.nuclei}
          alt="nuclei"
          onClick={() => assetClick("nuclei", "cell-face")}
        />
      </div>
      <div>
        <img
          src={Icons.Tabs.remove}
          className="remove-icon"
          alt="remove"
          onClick={() => assetClick("", "remove")}
        />
      </div>
    </div>
  );
};
