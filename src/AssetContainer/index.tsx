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
import { ClothingPanel } from "./clothing";
import { HobbiesPanel } from "./hobbies";
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
  handleClothingClick,
  handleChooseCurrentItem,
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

  return (
    <div>
      <Tabs
        forceRenderTabPanel
        defaultIndex={0}
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.base}></img>
            <h1>Base</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.cell}></img>
            <h1>Cell</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.eyes}></img>
            <h1>Eyes</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.mouth}></img>
            <h1>Mouth</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.accessories}></img>
            <h1>Clothing</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.hands}></img>
            <h1>Handled</h1>
          </CustomTab>
          <CustomTab>
            <img className="tabs-image " src={Icons.Tabs.hobbies}></img>
            <h1>Accessories</h1>
          </CustomTab>
        </TabList>
        <TabPanel>
          <HeadPanel
            handleClick={handleClick}
            handleChooseCurrentItem={handleChooseCurrentItem}
          />
        </TabPanel>

        <TabPanel>
          <CellsPanel
            handleCellClick={handleCellClick}
            handleChooseCurrentItem={handleChooseCurrentItem}
          />
        </TabPanel>
        <TabPanel>
          <EyesPanel handleEyeClick={handleEyeClick} />
        </TabPanel>
        <TabPanel>
          <MouthPanel handleMouthClick={handleMouthClick} />
        </TabPanel>
        <TabPanel>
          <ClothingPanel
            handleClothingClick={handleClothingClick}
            handleChooseCurrentItem={handleChooseCurrentItem}
          />
        </TabPanel>
        <TabPanel>
          <HandsPanel
            handleHandsClick={handleHandsClick}
            handleChooseCurrentItem={handleChooseCurrentItem}
          />
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
