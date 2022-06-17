import * as React from "react";
import Svg from "./StyledSvg";
function ArrowLeftRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.276 18.624l.984-.96-3.336-3.312a53.112 53.112 0 00-1.656-1.608h16.104v-1.488H5.268a53.09 53.09 0 001.656-1.608l3.336-3.312-.984-.96L2.628 12l6.648 6.624z" }));
}
export default ArrowLeftRegular;
