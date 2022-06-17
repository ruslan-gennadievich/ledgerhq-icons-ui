import * as React from "react";
import Svg from "./StyledSvg";
function ChevronTopLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.032 16.836L12 8.844l7.968 7.992.864-.864L12 7.164l-8.832 8.808.864.864z" }));
}
export default ChevronTopLight;
