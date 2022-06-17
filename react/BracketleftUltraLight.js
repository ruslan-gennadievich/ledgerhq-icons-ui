import * as React from "react";
import Svg from "./StyledSvg";
function BracketleftUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("g", { clipPath: "url(#prefix__clip0_471_10052)" },
            React.createElement("path", { d: "M3.6-7.44V3.6h2.448v-8.592H20.4V-7.44H3.6zm0 38.88h16.8v-2.448H6.048V20.4H3.6v11.04z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "prefix__clip0_471_10052" },
                React.createElement("path", { d: "M0 0h24v24H0z" }))));
}
export default BracketleftUltraLight;
