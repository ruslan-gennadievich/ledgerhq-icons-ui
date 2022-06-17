import * as React from "react";
import Svg from "./StyledSvg";
function ArrowsHMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.478 17.447l-1.2 1.176-6.648-6.624 6.648-6.624 1.2 1.176-3.384 3.36c-.384.384-.816.792-1.248 1.176h14.312a29.775 29.775 0 01-1.248-1.176l-3.384-3.36 1.2-1.176 6.648 6.624-6.648 6.624-1.2-1.176 3.384-3.36c.384-.384.816-.792 1.248-1.176H4.846c.432.384.864.792 1.248 1.176l3.384 3.36z" }));
}
export default ArrowsHMedium;
