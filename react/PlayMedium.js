import * as React from "react";
import Svg from "./StyledSvg";
function PlayMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M15.5 12L10 8.5v7l5.5-3.5z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21.36c-5.232 0-9.36-4.127-9.36-9.36 0-5.231 4.128-9.36 9.36-9.36 5.232 0 9.36 4.129 9.36 9.36 0 5.089-4.104 9.36-9.36 9.36zm0-16.8c-4.176 0-7.44 3.265-7.44 7.44 0 4.177 3.264 7.44 7.44 7.44s7.44-3.383 7.44-7.44c0-4.175-3.264-7.44-7.44-7.44z" }));
}
export default PlayMedium;
