import * as React from "react";
import Svg from "./StyledSvg";
function ArrowUpUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.356 20.22L19.476 5.1c0 1.176-.024 2.352-.024 3.48v4.56h.768V3.78h-9.36v.768h4.56c1.128 0 2.304-.024 3.48-.024L3.78 19.644l.576.576z" }));
}
export default ArrowUpUltraLight;
