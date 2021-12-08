import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icons } from "../icons";
import { ColorPicker, useColor } from "react-color-palette";
import "react-tabs/style/react-tabs.css";
import { HeadPanel } from "./head";
import { EyesPanel } from "./eyes";
import { HandsPanel } from "./hands";
import { AccessoriesPanel } from "./accessories";
import { OwnColorPicker } from "src/components/color-picker";
import "./index.scss";
import { MouthPanel } from "./mouth";
import { CellsPanel } from "./cells";
// All custom elements should pass through other props
const CustomTab = ({ children, ...otherProps }) => (
  <Tab {...otherProps}>{children}</Tab>
);

CustomTab.tabsRole = "Tab"; // Required field to use your custom Tab
export const AssetContainer = ({
  handleClick,
  face,
  handleEyeClick,
  handleHandsClick,
  handleColor,
  handleAccessoriesClick,
  handleMouthClick,
  handleCellClick,
}) => {
  // const passAsset =
  const [tabIndex, setTabIndex] = useState(0);
  const [colorType, setColorType] = useState("fill");
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setColorType(target.value);
    }
  };

  // useEffect(() => {
  //   handleColor(color);
  // }, [color]);
  return (
    // <Tabs forceRenderTabPanel defaultIndex={1}>
    //   <TabList>
    //     <Tab>Face</Tab>
    //     <Tab>Eyes</Tab>
    //   </TabList>
    //   <TabPanel>
    //     <HeadPanel handleClick={handleClick} />
    //   </TabPanel>
    //   <TabPanel>
    //     {/* <Tabs forceRenderTabPanel>
    //       <TabList>
    //         <Tab>Philip J. Fry</Tab>
    //         <Tab>Turanga Leela</Tab>
    //         <Tab>Bender Bending Rodriguez</Tab>
    //         <Tab>Amy Wong</Tab>
    //         <Tab>Professor Hubert J. Farnsworth</Tab>
    //         <Tab>Doctor John Zoidberg</Tab>
    //       </TabList>
    //       <TabPanel></TabPanel>
    //       <TabPanel></TabPanel>
    //       <TabPanel></TabPanel>
    //       <TabPanel>
    //         <p>
    //           Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.
    //         </p>
    //       </TabPanel>
    //     </Tabs> */}
    //     <EyesPanel handleEyeClick={handleEyeClick} />
    //   </TabPanel>
    // </Tabs>
    <div>
      <Tabs
        forceRenderTabPanel
        defaultIndex={0}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.vector}></img>
            <h1>Base</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Cell</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Eyes</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Mouth</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Clothing</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Handled</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.hobbies}></img>
            <h1>Hobbies</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.pets}></img>
            <h1>Pets</h1>
          </CustomTab>
        </TabList>
        <TabPanel>
          <HeadPanel handleClick={handleClick} />
        </TabPanel>
        <TabPanel>
          <CellsPanel handleCellClick={handleCellClick} />
        </TabPanel>
        <TabPanel>
          <EyesPanel handleEyeClick={handleEyeClick} />
        </TabPanel>
        <TabPanel>
          <HandsPanel handleHandsClick={handleHandsClick} />
        </TabPanel>
        <TabPanel>
          <MouthPanel handleMouthClick={handleMouthClick} />
        </TabPanel>
        <TabPanel>
          <AccessoriesPanel handleAccessoriesClick={handleAccessoriesClick} />
        </TabPanel>
      </Tabs>
      {/* {tabIndex === 0 && (
        <OwnColorPicker handleColor={handleColor} colorType={colorType} />
      )} */}
    </div>
  );
};
