import * as React from "react";
import Svg from "./StyledSvg";
function CoinAloneMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M3.36 12c0 5.472 2.904 10.32 7.08 10.32h3.192c4.08 0 7.008-4.776 7.008-10.32 0-5.544-2.928-10.32-7.008-10.32H10.44C6.264 1.68 3.36 6.528 3.36 12zm1.92 0c0-4.632 2.304-8.4 5.16-8.4 2.784 0 5.136 3.768 5.136 8.4 0 4.632-2.352 8.4-5.136 8.4-2.856 0-5.16-3.768-5.16-8.4zm8.832 8.352c1.848-1.776 3.024-4.896 3.024-8.352 0-3.456-1.176-6.576-3.024-8.352C16.68 4.032 18.72 7.632 18.72 12s-2.04 7.968-4.608 8.352z" }));
}
export default CoinAloneMedium;
