import * as React from "react";
import Svg from "./StyledSvg";
function DropdownLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 15.156l5.472-5.448-.864-.864L12 13.476 7.392 8.844l-.864.864L12 15.156z" }));
}
export default DropdownLight;
