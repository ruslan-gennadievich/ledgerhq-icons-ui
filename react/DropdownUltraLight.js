import * as React from "react";
import Svg from "./StyledSvg";
function DropdownUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 14.964l5.328-5.352-.576-.576L12 13.764 7.248 9.036l-.576.576L12 14.964z" }));
}
export default DropdownUltraLight;
