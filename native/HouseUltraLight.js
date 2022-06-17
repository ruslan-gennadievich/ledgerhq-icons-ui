import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function HouseUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.32 21.36h6.264v-7.176h2.832v7.176h6.264V10.728l2.064 1.872.576-.6L12 2.64 1.68 12l.576.6 2.064-1.872V21.36zm.816-.816V9.96L12 3.744l6.864 6.216v10.584h-4.68v-7.128H9.816v7.128h-4.68z" }));
}
export default HouseUltraLight;
