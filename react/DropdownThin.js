import * as React from "react";
import Svg from "./StyledSvg";
function DropdownThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 14.772l5.208-5.208-.336-.336L12 14.1 7.128 9.228l-.336.336L12 14.772z" }));
}
export default DropdownThin;
