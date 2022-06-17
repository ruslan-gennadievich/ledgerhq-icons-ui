import * as React from "react";
import Svg from "./StyledSvg";
function ArrowDownThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M10.8 20.16h9.36V10.8h-.456V19.368L4.176 3.84l-.336.336 15.528 15.528H10.8v.456z" }));
}
export default ArrowDownThin;
