import * as React from "react";
import { G, Path, Defs, ClipPath } from "react-native-svg";
import Svg from "./StyledSvg";
function BracketleftRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(G, { clipPath: "url(#prefix__clip0_471_10986)" },
            React.createElement(Path, { d: "M3.6-7.44V3.6h2.448v-8.592H20.4V-7.44H3.6zm0 38.88h16.8v-2.448H6.048V20.4H3.6v11.04z" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "prefix__clip0_471_10986" },
                React.createElement(Path, { d: "M0 0h24v24H0z" }))));
}
export default BracketleftRegular;
