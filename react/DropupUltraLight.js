import * as React from "react";
import Svg from "./StyledSvg";
function DropupUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 9.036l5.328 5.352-.576.576L12 10.236l-4.752 4.728-.576-.576L12 9.036z" }));
}
export default DropupUltraLight;
