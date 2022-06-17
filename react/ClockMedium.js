import * as React from "react";
import Svg from "./StyledSvg";
function ClockMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.328 12.672l3.456 3.456 1.344-1.344-3.168-3.192V6.48h-1.92V12c0 .264.12.504.288.672zM2.64 12c0 5.232 4.128 9.36 9.36 9.36 5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36zm1.92 0c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12z" }));
}
export default ClockMedium;
