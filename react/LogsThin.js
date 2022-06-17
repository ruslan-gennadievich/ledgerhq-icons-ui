import * as React from "react";
import Svg from "./StyledSvg";
function LogsThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.88 12.6h18.24v-.48H2.88v.48zm0 5.52h13.44v-.48H2.88v.48zm0-10.32l1.56-.96-1.56-.96V7.8zm4.08-.72h14.16V6.6H6.96v.48z" }));
}
export default LogsThin;
