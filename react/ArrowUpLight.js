import * as React from "react";
import Svg from "./StyledSvg";
function ArrowUpLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.536 20.28L19.248 5.568c-.024.96-.024 1.944-.024 2.904v4.632l1.056-.024V3.72h-9.36l-.024 1.056h4.632c.96 0 1.944 0 2.904-.024L3.72 19.464l.816.816z" }));
}
export default ArrowUpLight;
