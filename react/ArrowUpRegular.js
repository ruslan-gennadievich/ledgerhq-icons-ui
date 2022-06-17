import * as React from "react";
import Svg from "./StyledSvg";
function ArrowUpRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.716 20.34l14.28-14.304c0 .768-.024 1.56-.024 2.304v4.704h1.368V3.66h-9.384v1.368h4.704c.744 0 1.536-.024 2.304-.024L3.66 19.284l1.056 1.056z" }));
}
export default ArrowUpRegular;
