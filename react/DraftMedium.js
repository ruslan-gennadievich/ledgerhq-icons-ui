import * as React from "react";
import Svg from "./StyledSvg";
function DraftMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.08 21.36h15.84V2.64H9.432L4.08 7.992V21.36zM6 19.56V8.712h4.272V4.44H18v15.12H6z" }));
}
export default DraftMedium;
