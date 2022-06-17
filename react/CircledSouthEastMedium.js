import * as React from "react";
import Svg from "./StyledSvg";
function CircledSouthEastMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.624 15.792h6.168V9.648h-1.68v1.512c0 .528 0 1.128.048 1.704L9.144 7.848 7.848 9.144l5.04 5.04c-.6-.024-1.176-.072-1.752-.072l-1.512.024v1.656zM2.64 12c0 5.232 4.128 9.36 9.36 9.36 5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36zm1.92 0c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12z" }));
}
export default CircledSouthEastMedium;
