import * as React from "react";
import Svg from "./StyledSvg";
function CircledCheckSolidMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zm-5.136-9.672l1.344-1.344 2.976 2.952 5.28-5.256 1.344 1.344-6.624 6.648-4.32-4.344z" }));
}
export default CircledCheckSolidMedium;
