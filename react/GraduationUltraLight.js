import * as React from "react";
import Svg from "./StyledSvg";
function GraduationUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.243 9.456l5.81 2.296 5.883-2.349v3.93l-5.933 2.219-5.76-2.168V9.456zm-.695-.275L1.144 7.44l10.858-4.253 10.854 4.251-4.187 1.672v6.563l1.743 2.204-1.987 2.934-2.016-2.935 1.565-1.95v-1.866l-5.972 2.233-6.454-2.428V9.18zm11.665-.237l-5.16 2.06-9.01-3.558 8.96-3.509 8.961 3.51-2.762 1.103-5.961-2.058-.227.657 5.2 1.795zm.06 8.966l1.148 1.668 1.13-1.668-1.13-1.43-1.148 1.43z" }));
}
export default GraduationUltraLight;
