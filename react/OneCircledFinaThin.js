import * as React from "react";
import Svg from "./StyledSvg";
function OneCircledFinaThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.688 11.904v4.56h.48v-8.88h-1.272l-3.264 3.048v.648l3.456-3.216h.6v3.84zM4.032 20.88h7.056c4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88H4.032v.48h7.056c4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4H4.032v.48z" }));
}
export default OneCircledFinaThin;
