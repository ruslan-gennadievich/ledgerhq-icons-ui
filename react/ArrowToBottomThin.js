import * as React from "react";
import Svg from "./StyledSvg";
function ArrowToBottomThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 17.28l5.496-5.496-.336-.336-2.232 2.232-2.688 2.688V3.36h-.48v13.008L9.072 13.68 6.84 11.448l-.336.336L12 17.28zm-8.4 3.36h16.8v-.48H3.6v.48z" }));
}
export default ArrowToBottomThin;
