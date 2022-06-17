import * as React from "react";
import Svg from "./StyledSvg";
function CircledPlusSolidLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM6.624 12.6v-1.2h4.752V6.624h1.272l-.024 4.776h4.752v1.2h-4.752l.024 4.776h-1.272V12.6H6.624z" }));
}
export default CircledPlusSolidLight;
