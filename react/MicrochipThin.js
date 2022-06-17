import * as React from "react";
import Svg from "./StyledSvg";
function MicrochipThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M8.28 20.88h.48v-3.36h3v3.36h.48v-3.36h3v3.36h.48v-3.36h1.8v-1.8h3.36v-.48h-3.36v-3h3.36v-.48h-3.36v-3h3.36v-.48h-3.36v-1.8h-1.8V3.12h-.48v3.36h-3V3.12h-.48v3.36h-3V3.12h-.48v3.36h-1.8v1.8H3.12v.48h3.36v3H3.12v.48h3.36v3H3.12v.48h3.36v1.8h1.8v3.36zm-1.32-3.84V6.96h10.08v10.08H6.96zm2.52-2.52h5.04V9.48H9.48v5.04zm.48-.48V9.96h4.08v4.08H9.96z" }));
}
export default MicrochipThin;
