import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronTopUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.888 16.644L12 8.556l8.112 8.088.576-.576L12 7.356l-8.688 8.712.576.576z" }));
}
export default ChevronTopUltraLight;
