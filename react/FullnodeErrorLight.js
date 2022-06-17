import * as React from "react";
import Svg from "./StyledSvg";
function FullnodeErrorLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M10.908 20.688c.384 0 .72 0 1.08-.024l1.272-1.32a17.42 17.42 0 01-2.352.144c-4.056 0-6.504-1.008-6.504-2.304v-1.992c1.2 1.008 3.6 1.608 6.504 1.608.552 0 1.104-.024 1.632-.048l-.528-.552.552-.528c-.528.024-1.08.048-1.656.048-4.032 0-6.504-1.032-6.504-2.376v-1.968c1.2 1.032 3.6 1.632 6.504 1.632 2.88 0 5.28-.6 6.504-1.656v2.592l.576.552.624-.624V5.688c0-2.208-3.264-3.48-7.704-3.48-4.296 0-7.704 1.272-7.704 3.48v11.496c0 2.208 3.336 3.504 7.704 3.504zM4.404 9.504V7.56c1.2 1.008 3.6 1.584 6.504 1.584 2.856 0 5.28-.576 6.504-1.608v1.968c0 1.368-2.52 2.424-6.504 2.424-4.032 0-6.504-1.056-6.504-2.424zm0-3.816c0-1.296 2.52-2.28 6.504-2.28 4.128 0 6.504.96 6.504 2.28 0 1.368-2.52 2.376-6.504 2.376-4.032 0-6.504-1.008-6.504-2.376zm9.888 15.288l.792.816 2.472-2.472 2.448 2.472.792-.816-2.448-2.448 2.448-2.448-.792-.816-2.448 2.448-2.472-2.448-.792.816 2.448 2.448-2.448 2.448z" }));
}
export default FullnodeErrorLight;
