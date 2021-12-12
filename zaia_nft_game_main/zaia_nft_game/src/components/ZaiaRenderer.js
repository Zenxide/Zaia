import React from "react";
// cards
import { parts } from "../parts/parts";
import _r1 from "../assets/images/rarity/_rarity_1.png";
import _r2 from "../assets/images/rarity/_rarity_2.png";
import _r3 from "../assets/images/rarity/_rarity_3.png";

const ZaiaRenderer = ({ zaia = null, size = 200, style }) => {
  if (!zaia) {
    return null;
  }
  let rarity = _r1;

  if (zaia.rarity >= 80) {
    rarity = _r2;
  }
  if (zaia.rarity >= 95) {
    rarity = _r3;
  }

  let dnaStr = String(zaia.dna);

  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let zaiaDeatils = {
    bg: dnaStr.substring(0, 2) % 5,
    mask: dnaStr.substring(2, 4) % 5,
    line: dnaStr.substring(4, 6) % 5,
    addon: dnaStr.substring(6, 8) % 5,
    addonMouth1: dnaStr.substring(8, 10) % 5,
    addonMouth2: dnaStr.substring(10, 12) % 5,
    addonMouth3: dnaStr.substring(12, 14) % 5,
    name: zaia.name,
  };

  const zaiaStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        background: "blue",
        position: "relative",
        ...style,
      }}
    >
      <img alt={"bg"} src={parts.bg[zaiaDeatils.bg]} style={zaiaStyle} />
      <img alt={"mask"} src={parts.mask[zaiaDeatils.mask]} style={zaiaStyle} />
      <img alt={"line"} src={parts.line[zaiaDeatils.line]} style={zaiaStyle} />
      <img alt={"addon"} src={parts.addon[zaiaDeatils.addon]} style={zaiaStyle} />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[zaiaDeatils.addonMouth1]}
        style={zaiaStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[zaiaDeatils.addonMouth2]}
        style={zaiaStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[zaiaDeatils.addonMouth3]}
        style={zaiaStyle}
      />
      <img alt={"rarity"} src={rarity} style={zaiaStyle} />
    </div>
  );
};

export default ZaiaRenderer;
