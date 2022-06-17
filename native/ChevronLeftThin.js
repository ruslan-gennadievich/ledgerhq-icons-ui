import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronLeftThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M16.452 20.232L8.22 12l8.232-8.232-.336-.336L7.548 12l8.568 8.568.336-.336z" }));
}
export default ChevronLeftThin;
