import * as React from "react";
import Svg from "./StyledSvg";
function ThreeCircledInitUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M13.044 16.68c1.872 0 3.24-1.104 3.24-2.664 0-1.008-.576-1.824-1.752-2.136v-.12c1.104-.312 1.488-1.056 1.488-1.872 0-1.464-1.272-2.568-2.952-2.568-1.8 0-3.048 1.248-3.048 2.808v.168h.84c0-1.416.744-2.208 2.208-2.208 1.368 0 2.112.672 2.112 1.848 0 .96-.36 1.536-2.208 1.536h-.696v.768h.696c1.848 0 2.472.624 2.472 1.752 0 1.224-.84 1.896-2.4 1.896-1.632 0-2.328-.768-2.328-2.328h-.84v.12c0 1.728 1.2 3 3.168 3zM4.068 12c0 5.04 3.96 9 9 9h6.864v-.84h-6.864c-4.56 0-8.16-3.6-8.16-8.16 0-4.464 3.6-8.16 8.16-8.16h6.864V3h-6.864c-5.04 0-9 4.08-9 9z" }));
}
export default ThreeCircledInitUltraLight;
