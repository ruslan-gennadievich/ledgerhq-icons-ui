import * as React from "react";
import Svg from "./StyledSvg";
function OthersMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M17.424 13.488H20.4v-2.976h-2.976v2.976zm-13.824 0h2.976v-2.976H3.6v2.976zm6.912 0h2.976v-2.976h-2.976v2.976z" }));
}
export default OthersMedium;
