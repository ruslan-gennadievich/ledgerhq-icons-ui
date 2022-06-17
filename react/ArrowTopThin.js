import * as React from "react";
import Svg from "./StyledSvg";
function ArrowTopThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.76 3.54v17.832h.48V3.54l2.88 2.88 3.168 3.168.336-.336L12 2.628 5.376 9.252l.336.336L8.88 6.42l2.88-2.88z" }));
}
export default ArrowTopThin;