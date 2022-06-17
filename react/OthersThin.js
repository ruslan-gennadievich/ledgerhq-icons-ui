import * as React from "react";
import Svg from "./StyledSvg";
function OthersThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M18.96 12.72h1.44v-1.44h-1.44v1.44zm-15.36 0h1.44v-1.44H3.6v1.44zm7.68 0h1.44v-1.44h-1.44v1.44z" }));
}
export default OthersThin;
