import * as React from "react";
import Svg from "./StyledSvg";
function GraphGrowAltUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.52 20.232h18.72v-.84H3.36v-15h-.84v15.84zm2.352-5.064l5.208-5.184 2.88 2.88 7.752-7.752v4.824h.768V3.768h-6.144v.768h4.8l-7.176 7.176-2.88-2.88-5.208 5.184v1.152z" }));
}
export default GraphGrowAltUltraLight;
