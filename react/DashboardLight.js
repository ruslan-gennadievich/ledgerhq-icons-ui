import * as React from "react";
import Svg from "./StyledSvg";
function DashboardLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M3.12 20.136h17.76V18.96H4.32V4.296h-1.2v15.84zm3.912-3.432H8.28v-5.64H7.032v5.64zm4.056 0h1.248V6.24h-1.248v10.464zm4.056 0h1.248V8.64h-1.248v8.064zm4.056 0h1.248V3.864H19.2v12.84z" }));
}
export default DashboardLight;
