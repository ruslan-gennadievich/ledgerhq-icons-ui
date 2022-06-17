import * as React from "react";
import Svg from "./StyledSvg";
function ManagerUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.02 20.028V13.98h6v6.048h-6zm-.84.792h7.68v-7.632H3.18v7.632zm0-9.984h7.68V3.18H3.18v7.656zm.84-.816V3.996h6v6.024h-6zm9.12 10.8h7.68v-7.632h-7.68v7.632zm0-9.984h7.68V3.204h-7.68v7.632zm.84 9.192V13.98h6v6.048h-6zm0-9.984V3.996h6v6.048h-6z" }));
}
export default ManagerUltraLight;
