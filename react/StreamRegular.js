import * as React from "react";
import Svg from "./StyledSvg";
function StreamRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 7.344h13.92V5.712H2.64v1.632zm0 10.944h13.92v-1.632H2.64v1.632zm4.8-5.472h13.92v-1.632H7.44v1.632z" }));
}
export default StreamRegular;
