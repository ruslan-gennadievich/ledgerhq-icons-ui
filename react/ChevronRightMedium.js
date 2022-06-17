import * as React from "react";
import Svg from "./StyledSvg";
function ChevronRightMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M6.78 19.728l1.344 1.344L17.22 12 8.124 2.928 6.78 4.272 14.484 12 6.78 19.728z" }));
}
export default ChevronRightMedium;
