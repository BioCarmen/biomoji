import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import "./assets.scss";

export const HeadPanel = ({ handleClick }) => {
  const assetClick = (style) => {
    handleClick(style);
  };
  return (
    // <Tabs forceRenderTabPanel>
    //   <TabList>
    //     <Tab>Default Shape</Tab>
    //     <Tab>Narrow Shape</Tab>
    //     <Tab>Rounder Shape</Tab>
    //   </TabList>
    //   <div></div>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Face.defaultFace}
    //         alt="default face"
    //         onClick={() => assetClick("default")}
    //       />
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Face.narrowFace}
    //         alt="narrow face"
    //         onClick={() => assetClick("narrow")}
    //       />
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div>
    //       <img
    //         src={Icons.Face.rounderFace}
    //         alt="rounder face"
    //         onClick={() => assetClick("rounder")}
    //       />
    //     </div>
    //   </TabPanel>
    // </Tabs>
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
