import * as React from "react";
import Svg from "./StyledSvg";
function MinusMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.4 10.98H3.6v2.04h16.8v-2.04z" }));
}
export default MinusMedium;
