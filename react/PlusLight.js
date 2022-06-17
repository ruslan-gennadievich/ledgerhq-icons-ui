import * as React from "react";
import Svg from "./StyledSvg";
function PlusLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.4 11.376h-7.776V3.6h-1.248v7.776H3.6v1.248h7.776V20.4h1.248v-7.776H20.4v-1.248z" }));
}
export default PlusLight;
