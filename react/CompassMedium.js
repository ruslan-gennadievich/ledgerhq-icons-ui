import * as React from "react";
import Svg from "./StyledSvg";
function CompassMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 10l6-2-2 6-6 2 2-6zm2 3a1 1 0 100-2 1 1 0 000 2z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0-2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" }));
}
export default CompassMedium;
