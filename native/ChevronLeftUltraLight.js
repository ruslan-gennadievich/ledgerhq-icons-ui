import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronLeftUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M16.644 20.112L8.556 12l8.088-8.112-.576-.576L7.356 12l8.712 8.688.576-.576z" }));
}
export default ChevronLeftUltraLight;
