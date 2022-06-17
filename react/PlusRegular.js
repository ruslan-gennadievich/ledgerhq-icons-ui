import * as React from "react";
import Svg from "./StyledSvg";
function PlusRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.4 11.184h-7.584V3.6h-1.632v7.584H3.6v1.632h7.584V20.4h1.632v-7.584H20.4v-1.632z" }));
}
export default PlusRegular;
