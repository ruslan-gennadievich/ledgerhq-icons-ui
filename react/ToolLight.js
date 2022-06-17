import * as React from "react";
import Svg from "./StyledSvg";
function ToolLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.512 21.84c.576 0 1.2-.216 1.656-.672l9.624-9.648c.408.12.864.168 1.272.168 2.64 0 4.776-2.136 4.776-4.752 0-2.616-2.136-4.776-4.776-4.776-2.616 0-4.752 2.136-4.752 4.776 0 .432.048.864.168 1.272l-9.624 9.624a2.34 2.34 0 001.656 4.008zm-1.2-2.352c0-.312.096-.6.36-.864L13.8 8.496a3.812 3.812 0 01-.36-1.56c0-2.016 1.632-3.648 3.624-3.648.576 0 1.128.144 1.608.408l-2.688 2.688 1.632 1.632 2.688-2.688c.264.48.408 1.032.408 1.608 0 1.992-1.632 3.624-3.648 3.624-.552 0-1.08-.144-1.56-.36L5.352 20.352c-.24.24-.528.36-.84.36-.672 0-1.2-.552-1.2-1.224z" }));
}
export default ToolLight;
