import * as React from "react";
import Svg from "./StyledSvg";
function ChevronBottomLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.02 7.164l-.84.84 8.808 8.832 8.832-8.832-.84-.84-7.992 7.968L4.02 7.164z" }));
}
export default ChevronBottomLight;
