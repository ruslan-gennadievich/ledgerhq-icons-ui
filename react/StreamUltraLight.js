import * as React from "react";
import Svg from "./StyledSvg";
function StreamUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 6.96h13.92v-.864H2.64v.864zm0 10.944h13.92v-.864H2.64v.864zm4.8-5.472h13.92v-.864H7.44v.864z" }));
}
export default StreamUltraLight;
