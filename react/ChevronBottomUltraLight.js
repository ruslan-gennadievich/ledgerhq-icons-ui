import * as React from "react";
import Svg from "./StyledSvg";
function ChevronBottomUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M3.888 7.356l-.576.576L12 16.644l8.688-8.712-.576-.576L12 15.444 3.888 7.356z" }));
}
export default ChevronBottomUltraLight;
