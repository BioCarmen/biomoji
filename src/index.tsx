import React, {
  Component,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import PropTypes from "prop-types";

import type { NiceAvatarProps } from "./types";

import { genConfig, defaultOptions, adjustColor, download } from "./utils";

import Face from "./face";
import Hair from "./hair";
import Hat from "./hat";
import Ear from "./ear";
import Eyebrow from "./eyebrow";
import Eye from "./eyes";
import Clothing from "./clothing";
import Nose from "./nose";
import Mouth from "./mouth";
import Shirt from "./shirt";
import Hands from "./hands";
import Cell from "./cell";
import Accessories from "./accessories";
import { AssetContainer } from "./AssetContainer/index";
import Icon from "./components/Icon";
import "./index.scss";
import { OwnColorPicker } from "./components/color-picker";
import baseballCap from "./clothing/baseball-cap";
import { Icons } from "./icons";

export const ReactNiceAvatar = (props) => {
  const {
    id,
    className,
    style,
    shape = "circle",
    hairColorRandom = false,
  } = props;
  const config = genConfig(props);

  const [face, setFace] = useState("");
  const [eyeStyle, setEyeStyle] = useState("");
  const [fillColor, setFillColor] = useState("#92dbe0");
  const [strokeColor, setStrokeColor] = useState("#368c8e");
  const [accessory1, setAccessory1] = useState("");
  const [accessory2, setAccessory2] = useState("");
  const [accessory3, setAccessory3] = useState("");
  const [accessory4, setAccessory4] = useState("");
  const [selectedPos, setSelectedPos] = useState(0);
  const [mouthStyle, setMouthStyle] = useState("");
  const [handPos, setHandPos] = useState("");
  const [leftHand, setLeftHand] = useState("");
  const [rightHand, setRightHand] = useState("");
  const [cellStyle, setCellStyle] = useState("");
  const [hatStyle, setHatStyle] = useState("");
  const [glassStyle, setGlassStyle] = useState("");
  const [headphoneStyle, setHeadphoneStyle] = useState("");
  const [maskStyle, setMaskStyle] = useState("");
  const [neckStyle, setNeckStyle] = useState("");
  const [colors, setColors] = useState({
    head: { strokeColor: "#368c8e", fillColor: "#92dbe0" },
    beanie: { strokeColor: "#1e2223", fillColor: "#434444" },
    baseballCap: { strokeColor: "#848f9c", fillColor: "#b5bec9" },
  });
  const [currentItem, setCurrentItem] = useState("");
  const [sliderVal, setSliderVal] = useState(50);
  const [sliderVerticalVal, setSliderVerticalVal] = useState(25);

  // Background shape
  let borderRadius;
  switch (shape) {
    case "circle": {
      borderRadius = "100%";
      break;
    }
    case "rounded": {
      borderRadius = "6px";
      break;
    }
    case "square": {
      borderRadius = 0;
      break;
    }
  }
  const handleClick = (style) => {
    setFace(style);
  };
  const handleEyeClick = (style) => {
    setEyeStyle(style);
  };
  const handleHandsClick = (style) => {
    if (handPos === "left") {
      setLeftHand(style);
    }
    if (handPos === "right") {
      setRightHand(style);
    }
  };
  console.log(colors);
  const handleColor = (color) => {
    // if (colorType == "fill") {

    setFillColor(color.hex);
    const _strokeColor = adjustColor(color.hex, -40);
    setStrokeColor(_strokeColor ?? "#368c8e");

    // }
    if (colors && currentItem && color.hex && _strokeColor) {
      if (["hand", "head", "cell"].includes(currentItem)) {
        let updatedColors = colors;
        updatedColors["head"].fillColor = color.hex;
        updatedColors["head"].strokeColor = _strokeColor;
        setColors(updatedColors);
      } else {
        let updatedColors = colors;
        updatedColors[currentItem].fillColor = color.hex;
        updatedColors[currentItem].strokeColor = _strokeColor;
        setColors(updatedColors);
      }
    }
  };
  const handleAccessoriesClick = (style) => {
    if (selectedPos === 1) {
      setAccessory1(style);
    }
    if (selectedPos === 2) {
      setAccessory2(style);
    }
    if (selectedPos === 3) {
      setAccessory3(style);
    }
    if (selectedPos === 4) {
      setAccessory4(style);
    }
  };
  const handleClickControl = (value) => {
    setSelectedPos(value);
  };
  const handleMouthStyle = (style) => {
    setMouthStyle(style);
  };
  const handleHandPos = (value) => {
    setHandPos(value);
  };
  const handleCellClick = (style) => {
    setCellStyle(style);
  };
  const handleClothingClick = (style, item) => {
    if (item === "glass") {
      setGlassStyle(style);
    }
    if (item === "hat") {
      setHatStyle(style);
    }
  };
  const handleChooseCurrentItem = (value) => {
    console.log(value);
    setCurrentItem(value);
  };
  const handleChangeSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      setSliderVal(val);
    },
    []
  );
  const handleChangeVerticalSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      setSliderVerticalVal(val);
    },
    []
  );
  return (
    <div className="body">
      <div className="header">
        <img src={require("src/assets/general/banner.png").default}></img>
      </div>
      <div className="playground">
        <div className="playground-header">Build-a-biomoji</div>
        <input
          aria-label="zoom slider"
          className="slider"
          type="range"
          min={0}
          max={100}
          value={sliderVal}
          onChange={handleChangeSlider}
          step={1}
          style={{ cursor: "pointer" }}
          alt="slider"
        />

        <div className="playground-body">
          {!face && (
            <div className="placeholder">
              Select a base shape to get started
            </div>
          )}
          {face && (
            <div
              id={"download-item"}
              className={`${className} editor playground-display`}
              style={{
                background: config.bgColor,
                overflow: "hidden",
                borderRadius,
                ...style,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "90%",
                  }}
                >
                  <Face
                    fillColor={colors["head"].fillColor}
                    strokeColor={colors["head"].strokeColor}
                    shape={face}
                  />
                  <Hands
                    style={leftHand}
                    fillColor={fillColor}
                    strokeColor={strokeColor}
                    face={face}
                    position={"left"}
                  />
                  <Hands
                    style={rightHand}
                    fillColor={colors["head"].fillColor}
                    strokeColor={colors["head"].strokeColor}
                    face={face}
                    position={"right"}
                  />
                  <Cell
                    style={cellStyle}
                    fillColor={colors["head"].fillColor}
                    strokeColor={colors["head"].strokeColor}
                    face={face}
                    position={"right"}
                  />
                  {/* <Hat color={config.hatColor} style={config.hatStyle} /> */}
                  {/* {config.hatStyle === "none" && (
              <Hair
                color={config.hairColor}
                style={config.hairStyle}
                colorRandom={hairColorRandom}
              />
            )} */}
                  <Accessories
                    type={accessory1}
                    position={1}
                    selected={selectedPos === 1}
                  />
                  <Accessories
                    type={accessory2}
                    position={2}
                    selected={selectedPos === 2}
                  />
                  <Accessories
                    type={accessory3}
                    position={3}
                    selected={selectedPos === 3}
                  />
                  <Accessories
                    type={accessory4}
                    position={4}
                    selected={selectedPos === 4}
                  />
                  {/* Face detail */}
                  <div
                    style={{
                      position: "absolute",
                      right: "-3%",
                      top: "30%",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Eyebrow style={config.eyeBrowStyle} /> */}
                    <Eye style={eyeStyle} />
                    <Mouth
                      style={mouthStyle}
                      sliderVal={sliderVal}
                      sliderVerticalVal={sliderVerticalVal}
                    />
                    <Clothing style={hatStyle} face={face} colors={colors} />
                    <Clothing style={glassStyle} />
                    <Clothing style={headphoneStyle} face={face} />
                    <Clothing style={maskStyle} face={face} />
                    <Clothing style={neckStyle} face={face} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {face && (
          <div className="operations">
            <img
              className="save-icon download"
              src={Icons.Tabs.save}
              onClick={download}
            ></img>
            <img className="save-icon upload" src={Icons.Tabs.save}></img>
          </div>
        )}
      </div>
      <div>
        <input
          aria-label="zoom slider"
          className="slider vertical-slider"
          type="range"
          min={0}
          max={100}
          value={sliderVerticalVal}
          onChange={handleChangeVerticalSlider}
          step={1}
          style={{ cursor: "pointer" }}
          alt="slider"
        />
      </div>
      <div className="playground-editor">
        <div className="playground-editor__title">Customization</div>
        <div className="playground-editor__section-1">
          <div className="playground-editor__section-1-controllers">
            <div className="playground-editor__section-1-controllers-controls">
              <div className="playground-editor__section-1-title">
                Icon Placement
              </div>
              <div className="playground-editor__section-1-subtitle">
                Before selecting a biomoji accessory, select which corner or arm
                you'd like your biomoji accessories to placed.
              </div>
              <div className="position-control">
                <div className="playground-editor__section-1-controllers-control">
                  <div className="controller-line-1">
                    <div
                      className={`circle-base upper-left ${
                        selectedPos === 1 ? "selected" : ""
                      }`}
                      onClick={() => handleClickControl(1)}
                    ></div>
                    <div
                      className={`circle-base upper-right ${
                        selectedPos === 2 ? "selected" : ""
                      }`}
                      onClick={() => handleClickControl(2)}
                    ></div>
                  </div>
                  <div className="controller-line-2">
                    <div className={`circle-base center`}></div>
                  </div>
                  <div className="controller-line-3">
                    <div
                      className={`circle-base bottom-left ${
                        selectedPos === 4 ? "selected" : ""
                      }`}
                      onClick={() => handleClickControl(4)}
                    ></div>
                    <div
                      className={`circle-base bottom-right ${
                        selectedPos === 3 ? "selected" : ""
                      }`}
                      onClick={() => handleClickControl(3)}
                    ></div>
                  </div>
                </div>
                <div className="playground-editor__section-1-controllers-hand-control">
                  <div
                    className={`circle-base left ${
                      handPos === "left" ? "selected" : ""
                    }`}
                    onClick={() => handleHandPos("left")}
                  ></div>
                  <div className={`circle-base center`}></div>
                  <div
                    className={`circle-base right ${
                      handPos === "right" ? "selected" : ""
                    }`}
                    onClick={() => handleHandPos("right")}
                  ></div>
                </div>
              </div>
            </div>
            <div className="playground-editor__section-1-controllers-color-picker-section">
              <div className="playground-editor__section-1-title">
                Color Picker
              </div>
              <div className="playground-editor__section-1-subtitle">
                {`Current Selected Item for color picker: [${currentItem}]`}
              </div>
              <div className="playground-editor__section-1-controllers-color-picker">
                <OwnColorPicker handleColor={handleColor} colorType={"#fff"} />
              </div>
            </div>
          </div>
        </div>

        <div className="playground-editor__section-2">
          <AssetContainer
            handleClick={handleClick}
            face={face}
            handleEyeClick={handleEyeClick}
            handleHandsClick={handleHandsClick}
            handleColor={handleColor}
            handleAccessoriesClick={handleAccessoriesClick}
            handleMouthClick={handleMouthStyle}
            handleCellClick={handleCellClick}
            handleClothingClick={handleClothingClick}
            handleChooseCurrentItem={handleChooseCurrentItem}
          />
        </div>
      </div>
    </div>
  );
};

export { genConfig } from "./utils";
