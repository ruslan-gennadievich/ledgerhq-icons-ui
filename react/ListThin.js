import * as React from "react";
import Svg from "./StyledSvg";
function ListThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M6.72 6.72h14.4v-.48H6.72v.48zM2.88 18.24h1.44V16.8H2.88v1.44zm0-5.52h1.44v-1.44H2.88v1.44zm0-5.52h1.44V5.76H2.88V7.2zm3.84 10.56h14.4v-.48H6.72v.48zm0-5.52h14.4v-.48H6.72v.48z" }));
}
export default ListThin;
