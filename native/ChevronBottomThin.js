import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronBottomThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.768 7.548l-.336.336L12 16.452l8.568-8.568-.336-.336L12 15.78 3.768 7.548z" }));
}
export default ChevronBottomThin;
