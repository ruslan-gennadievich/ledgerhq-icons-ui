import * as React from "react";
import Svg from "./StyledSvg";
function CircledAlertMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.184 13.536h1.608l.24-3.312V6.768h-2.064v3.456l.216 3.312zM2.64 12c0 5.232 4.128 9.36 9.36 9.36 5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36zm1.92 0c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12zm6.288 5.28h2.304v-2.304h-2.304v2.304z" }));
}
export default CircledAlertMedium;
