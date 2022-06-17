import * as React from "react";
import Svg from "./StyledSvg";
function GraduationMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.483 9.619L.557 7.673l11.449-4.486 11.437 4.48-4.754 1.898v5.847l1.62 2.048-2.27 3.352-2.304-3.352 1.647-2.051v-.944l-5.379 2.012-6.52-2.454V9.62zm1.568.619l5.002 1.975 5.068-2.023v2.7l-5.116 1.912-4.954-1.864v-2.7zm8.783-1.222l-3.784 1.51L4.838 7.68 12 4.873l7.176 2.81-1.487.592-5.26-1.816-.427 1.235 3.831 1.322zm1.528 8.505l.67.973.659-.973-.66-.833-.669.833z" }));
}
export default GraduationMedium;
