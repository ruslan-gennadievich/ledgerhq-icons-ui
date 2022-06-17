import * as React from "react";
import Svg from "./StyledSvg";
function ArrowRightThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M14.748 18.624L21.372 12l-6.624-6.624-.336.336L17.58 8.88l2.88 2.88H2.628v.48H20.46l-2.88 2.88-3.168 3.168.336.336z" }));
}
export default ArrowRightThin;
