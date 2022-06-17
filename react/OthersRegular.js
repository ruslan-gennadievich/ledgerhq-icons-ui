import * as React from "react";
import Svg from "./StyledSvg";
function OthersRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M17.808 13.296H20.4v-2.592h-2.592v2.592zm-14.208 0h2.592v-2.592H3.6v2.592zm7.104 0h2.592v-2.592h-2.592v2.592z" }));
}
export default OthersRegular;
