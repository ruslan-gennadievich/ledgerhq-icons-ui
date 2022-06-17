import * as React from "react";
import Svg from "./StyledSvg";
function ArrowDownMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.016 20.4H20.4v-9.384l-1.68-.024v4.776c0 .552.024 1.152.048 1.728L4.896 3.6 3.6 4.896l13.896 13.872a42.706 42.706 0 00-1.728-.048h-4.776l.024 1.68z" }));
}
export default ArrowDownMedium;
