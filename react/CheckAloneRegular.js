import * as React from "react";
import Svg from "./StyledSvg";
function CheckAloneRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M1.824 12.852l6.576 6.6L22.176 5.7l-1.152-1.152L8.4 17.1l-5.424-5.4-1.152 1.152z" }));
}
export default CheckAloneRegular;
