import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const EyesPanel = ({ handleEyeClick }) => {
  const assetClick = (style) => {
    handleEyeClick(style);
  };
  return (
    // <Tabs forceRenderTabPanel>
    //   <TabList>
    //     <Tab>1</Tab>
    //     <Tab>2</Tab>
    //     <Tab>3</Tab>
    //     {/* <Tab>4</Tab>
    //     <Tab>5</Tab>
    //     <Tab>6</Tab> */}
    //   </TabList>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Eyes.eye1}
    //         alt="default face"
    //         onClick={() => assetClick("eye1")}
    //       />
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Eyes.eye2}
    //         alt="narrow face"
    //         onClick={() => assetClick("eye2")}
    //       />
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Eyes.eye3}
    //         alt="rounder face"
    //         onClick={() => assetClick("eye3")}
    //       />
    //     </div>
    //   </TabPanel>
    // </Tabs>
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
    </div>
  );
};
