import * as React from "react";
import Svg from "./StyledSvg";
function GraphGrowAltThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 20.232h18.72v-.48H3.12V4.392h-.48v15.84zm1.92-5.112l5.4-5.376 2.88 2.88 8.04-8.04v5.352h.48V3.768h-6.144v.48H20.544l-7.704 7.704-2.88-2.88-5.4 5.376v.672z" }));
}
export default GraphGrowAltThin;
