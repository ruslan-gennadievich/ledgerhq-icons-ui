import * as React from "react";
import Svg from "./StyledSvg";
function ChevronLeftLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M16.836 19.968L8.868 12l7.968-7.992-.84-.84L7.164 12l8.832 8.832.84-.864z" }));
}
export default ChevronLeftLight;
