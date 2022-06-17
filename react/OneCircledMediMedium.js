import * as React from "react";
import Svg from "./StyledSvg";
function OneCircledMediMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.88 13.536v2.928h1.92v-8.88h-2.232l-2.784 2.568v2.256l2.832-2.592h.336s-.072 1.584-.072 3.72zM5.76 21.36h12.48v-1.92H5.76v1.92zm0-16.8h12.48V2.64H5.76v1.92z" }));
}
export default OneCircledMediMedium;
