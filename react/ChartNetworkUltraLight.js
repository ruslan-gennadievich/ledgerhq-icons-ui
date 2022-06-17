import * as React from "react";
import Svg from "./StyledSvg";
function ChartNetworkUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M19.668 20.136a2.243 2.243 0 002.232-2.232 2.243 2.243 0 00-2.232-2.232c-.648 0-1.248.312-1.656.768l-2.736-1.608c.192-.384.288-.816.288-1.272a3.13 3.13 0 00-3.12-3.12c-.36 0-.696.072-1.008.192L10.14 7.896c.552-.408.936-1.08.936-1.8a2.243 2.243 0 00-2.232-2.232 2.243 2.243 0 00-2.232 2.232 2.243 2.243 0 002.232 2.232c.216 0 .432-.048.624-.096l1.296 2.712a3.075 3.075 0 00-1.416 2.616c0 1.752 1.368 3.12 3.096 3.12 1.008 0 1.896-.48 2.448-1.2l2.712 1.608c-.096.24-.168.528-.168.816a2.243 2.243 0 002.232 2.232zM2.1 13.584c0 .864.72 1.584 1.584 1.584.888 0 1.608-.72 1.608-1.584 0-.888-.72-1.608-1.608-1.608-.864 0-1.584.72-1.584 1.608zm4.104.336h2.208v-.672H6.204v.672zM7.38 6.096c0-.816.672-1.488 1.464-1.488.816 0 1.488.672 1.488 1.488 0 .792-.672 1.464-1.488 1.464A1.486 1.486 0 017.38 6.096zm2.736 7.464a2.315 2.315 0 012.328-2.328 2.315 2.315 0 012.328 2.328 2.3 2.3 0 01-2.328 2.328 2.3 2.3 0 01-2.328-2.328zm5.448-2.712l.384.552 2.376-1.728-.408-.552-2.352 1.728zm2.64 7.056c0-.816.672-1.488 1.464-1.488.816 0 1.488.672 1.488 1.488 0 .792-.672 1.464-1.488 1.464a1.486 1.486 0 01-1.464-1.464zm.408-10.032c0 .888.72 1.608 1.584 1.608a1.608 1.608 0 000-3.216c-.864 0-1.584.72-1.584 1.608z" }));
}
export default ChartNetworkUltraLight;
