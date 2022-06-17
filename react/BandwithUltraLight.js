import * as React from "react";
import Svg from "./StyledSvg";
function BandwithUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M19.944 20.4h.864V3.6h-.864v16.8zm-16.752 0h.864v-4.248h-.864V20.4zm4.176 0h.888v-7.392h-.888V20.4zm4.2 0h.864V9.864h-.864V20.4zm4.176 0h.888V6.72h-.888V20.4z" }));
}
export default BandwithUltraLight;
