import * as React from "react";
import Svg from "./StyledSvg";
function CardMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M17.5 14H14v1.8h3.5V14z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64 4.5a1 1 0 00-1 1v13a1 1 0 001 1h16.72a1 1 0 001-1v-13a1 1 0 00-1-1H3.64zm.8 1.8V9h15.12V6.3H4.44zm0 11.4v-6.9h15.12v6.9H4.44z" }));
}
export default CardMedium;
