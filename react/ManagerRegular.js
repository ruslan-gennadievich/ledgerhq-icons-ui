import * as React from "react";
import Svg from "./StyledSvg";
function ManagerRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.38 19.704v-5.136h5.04v5.136H4.38zm-1.56 1.464h8.16v-8.064H2.82v8.064zm0-10.272h8.16V2.832H2.82v8.064zm1.56-1.464V4.296h5.04v5.136H4.38zm8.64 11.736h8.16v-8.064h-8.16v8.064zm0-10.272h8.16V2.832h-8.16v8.064zm1.56 8.808v-5.136h5.04v5.136h-5.04zm0-10.272V4.296h5.04v5.136h-5.04z" }));
}
export default ManagerRegular;
