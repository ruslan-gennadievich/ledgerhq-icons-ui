import * as React from "react";
import Svg from "./StyledSvg";
function CircledCheckSolidThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.88c4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88 0 4.968 3.912 8.88 8.88 8.88zm-4.656-9.648l.336-.336 3.504 3.504 5.832-5.832.336.336-6.168 6.168-3.84-3.84z" }));
}
export default CircledCheckSolidThin;
