import * as React from "react";
import Svg from "./StyledSvg";
function ChevronRightThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M7.548 20.232l.336.336L16.452 12 7.884 3.432l-.336.336L15.78 12l-8.232 8.232z" }));
}
export default ChevronRightThin;
