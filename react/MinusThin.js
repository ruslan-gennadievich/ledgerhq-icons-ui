import * as React from "react";
import Svg from "./StyledSvg";
function MinusThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.4 11.76H3.6v.48h16.8v-.48z" }));
}
export default MinusThin;
