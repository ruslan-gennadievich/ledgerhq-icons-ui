import * as React from "react";
import Svg from "./StyledSvg";
function CircledPlusSolidMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zm-5.376-8.4v-1.92h4.368V6.624h2.04v4.416h4.344v1.92h-4.344v4.416h-2.04V12.96H6.624z" }));
}
export default CircledPlusSolidMedium;
