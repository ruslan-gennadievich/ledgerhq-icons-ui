import * as React from "react";
import Svg from "./StyledSvg";
function Filters2Regular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.639 20.813V11.56L5.156 6.932V3.187h13.688v3.736l-4.289 4.63v4.593L9.64 20.812zM6.537 6.374l4.483 4.627v6.6l2.154-2.045v-4.542l4.289-4.63V4.569H6.537v1.807z" }));
}
export default Filters2Regular;
