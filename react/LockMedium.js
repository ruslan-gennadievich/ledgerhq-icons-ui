import * as React from "react";
import Svg from "./StyledSvg";
function LockMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.632 21.36h14.736V9.6h-1.92V7.968c0-2.976-2.496-5.328-5.448-5.328-2.952 0-5.448 2.352-5.448 5.328V9.6h-1.92v11.76zm1.92-1.8V11.4h10.896v8.16H6.552zm1.92-9.96V7.968c0-1.92 1.584-3.528 3.528-3.528s3.528 1.608 3.528 3.528V9.6H8.472z" }));
}
export default LockMedium;
