import * as React from "react";
import Svg from "./StyledSvg";
function ChevronBottomRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.152 6.972L3.048 8.076 12 17.028l8.952-8.952-1.104-1.104L12 14.82 4.152 6.972z" }));
}
export default ChevronBottomRegular;
