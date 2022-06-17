import * as React from "react";
import Svg from "./StyledSvg";
function ListMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M7.44 7.44h13.92V5.52H7.44v1.92zm-4.8 11.28h2.4v-2.4h-2.4v2.4zm0-5.52h2.4v-2.4h-2.4v2.4zm0-5.52h2.4v-2.4h-2.4v2.4zm4.8 10.8h13.92v-1.92H7.44v1.92zm0-5.52h13.92v-1.92H7.44v1.92z" }));
}
export default ListMedium;
