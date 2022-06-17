import * as React from "react";
import Svg from "./StyledSvg";
function GroupThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M5.928 17.652v1.8h12.144v-1.8c0-2.376-2.04-4.464-4.488-4.464h-3.168c-2.448 0-4.488 2.088-4.488 4.464zm-4.248 1.8h.48v-1.44c0-1.248.888-2.232 2.112-2.376.096-.168.192-.336.312-.504-1.584 0-2.904 1.344-2.904 2.88v1.44zm.24-9.24a2.745 2.745 0 002.76 2.76 2.745 2.745 0 002.76-2.76 2.745 2.745 0 00-2.76-2.76 2.745 2.745 0 00-2.76 2.76zm.48 0a2.264 2.264 0 012.28-2.28 2.264 2.264 0 012.28 2.28 2.264 2.264 0 01-2.28 2.28 2.264 2.264 0 01-2.28-2.28zm4.008 8.76v-1.32c0-2.112 1.824-3.984 4.008-3.984h3.168c2.184 0 4.008 1.872 4.008 3.984v1.32H6.408zM8.64 7.908a3.37 3.37 0 003.36 3.36 3.37 3.37 0 003.36-3.36A3.37 3.37 0 0012 4.548a3.37 3.37 0 00-3.36 3.36zm.48 0A2.888 2.888 0 0112 5.028a2.888 2.888 0 012.88 2.88 2.888 2.888 0 01-2.88 2.88 2.889 2.889 0 01-2.88-2.88zm7.44 2.304a2.745 2.745 0 002.76 2.76 2.745 2.745 0 002.76-2.76 2.745 2.745 0 00-2.76-2.76 2.745 2.745 0 00-2.76 2.76zm.48 0a2.264 2.264 0 012.28-2.28 2.264 2.264 0 012.28 2.28 2.264 2.264 0 01-2.28 2.28 2.264 2.264 0 01-2.28-2.28zm2.376 4.92c.12.168.216.336.312.504a2.353 2.353 0 012.112 2.376v1.44h.48v-1.44c0-1.536-1.32-2.88-2.904-2.88z" }));
}
export default GroupThin;