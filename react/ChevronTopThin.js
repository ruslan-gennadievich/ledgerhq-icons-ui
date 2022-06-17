import * as React from "react";
import Svg from "./StyledSvg";
function ChevronTopThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M3.768 16.452L12 8.22l8.232 8.232.336-.336L12 7.548l-8.568 8.568.336.336z" }));
}
export default ChevronTopThin;
