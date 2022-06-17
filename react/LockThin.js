import * as React from "react";
import Svg from "./StyledSvg";
function LockThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.872 21.24h14.256V9.72h-2.112V7.776C17.016 5.04 14.76 2.76 12 2.76c-2.76 0-5.016 2.28-5.016 5.016V9.72H4.872v11.52zm.48-.48V10.2h13.296v10.56H5.352zM7.464 9.72V7.776c0-2.472 2.04-4.536 4.536-4.536 2.496 0 4.536 2.064 4.536 4.536V9.72H7.464z" }));
}
export default LockThin;
