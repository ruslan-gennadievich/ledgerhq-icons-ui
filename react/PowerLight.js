import * as React from "react";
import Svg from "./StyledSvg";
function PowerLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M10.248 22.344L19.608 9.6h-6.456l.576-7.944L4.392 14.4h6.432l-.576 7.944zM6.6 13.32l5.856-8.088L12 10.68h5.4l-5.856 8.088L12 13.32H6.6z" }));
}
export default PowerLight;
