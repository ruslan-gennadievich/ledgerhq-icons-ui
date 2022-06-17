import * as React from "react";
import Svg from "./StyledSvg";
function DropleftMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M8 12l5.736 5.712 1.344-1.344L10.736 12l4.344-4.368-1.344-1.344L8 12z" }));
}
export default DropleftMedium;
