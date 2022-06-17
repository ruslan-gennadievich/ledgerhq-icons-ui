import * as React from "react";
import Svg from "./StyledSvg";
function MinusLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.4 11.376H3.6v1.248h16.8v-1.248z" }));
}
export default MinusLight;
