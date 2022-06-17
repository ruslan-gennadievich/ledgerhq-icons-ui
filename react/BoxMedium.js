import * as React from "react";
import Svg from "./StyledSvg";
function BoxMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.976 22.64l8.976-5.232V7.232L11.976 2 3 7.232v10.176l8.976 5.232zM4.92 16.4V9.32l6.168 3.528V20L4.92 16.4zm5.135-11.164l1.921-1.124 6.192 3.624-1.962 1.125-6.15-3.625zM8.274 6.28l-2.49 1.457 6.192 3.552 2.438-1.398-6.14-3.611zM12.888 20v-7.152l2.088-1.199v4.131l1.8-1.06v-4.105l2.256-1.295v7.08L12.888 20z" }));
}
export default BoxMedium;
