import * as React from "react";
import Svg from "./StyledSvg";
function ActivityThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M1.668 12.252h4.104l3.024-9.048 6.36 19.128 3.384-10.08h3.792v-.48h-4.128l-3.048 9.024-6.36-19.128-3.36 10.104H1.668v.48z" }));
}
export default ActivityThin;
