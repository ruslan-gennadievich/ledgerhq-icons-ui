import * as React from "react";
import Svg from "./StyledSvg";
function CloseMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.328 18.84L13.488 12l6.84-6.84-1.536-1.44L12 10.512 5.208 3.72 3.672 5.16l6.84 6.84-6.84 6.84 1.536 1.44L12 13.488l6.792 6.792 1.536-1.44z" }));
}
export default CloseMedium;
