import * as React from "react";
import Svg from "./StyledSvg";
function ArrowEvolutionDownMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M16.004 14.607L7.397 6 5.983 7.414l8.606 8.607H7.004v2h11v-11h-2v7.586z" }));
}
export default ArrowEvolutionDownMedium;
