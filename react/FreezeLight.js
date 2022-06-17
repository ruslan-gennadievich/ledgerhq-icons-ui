import * as React from "react";
import Svg from "./StyledSvg";
function FreezeLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.472 21.36h1.08l-.048-3.384 1.968 1.992.72-.72-2.64-2.664-.048-3.384 5.4 5.424.72-.72-5.424-5.4 3.384.024 2.664 2.664.72-.72-1.992-1.968 3.384.024v-1.08l-3.384.048 1.992-1.968-.72-.72-2.664 2.64-3.384.048 5.424-5.4-.72-.72-5.4 5.424.048-3.384 2.64-2.664-.72-.72-1.968 1.992.048-3.384h-1.08l.024 3.384-1.968-1.992-.72.72 2.664 2.664.024 3.384-5.4-5.424-.72.72 5.424 5.4-3.384-.048-2.664-2.64-.72.72 1.992 1.968-3.384-.048v1.08l3.384-.024-1.992 1.968.72.72 2.664-2.664 3.384-.024-5.424 5.4.72.72 5.4-5.424-.024 3.384-2.664 2.664.72.72 1.968-1.992-.024 3.384z" }));
}
export default FreezeLight;
