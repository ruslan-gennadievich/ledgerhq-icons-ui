import * as React from "react";
import Svg from "./StyledSvg";
function BuyCryptoUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 12h.816V6.504h17.4c-.6.576-1.176 1.152-1.752 1.728l-1.68 1.656.552.552 4.344-4.344-4.344-4.344-.552.552 1.68 1.656c.552.576 1.152 1.152 1.728 1.728H2.64V12zm-.96 5.904l4.344 4.344.552-.552-1.68-1.68a116.5 116.5 0 00-1.728-1.704H21.36V12h-.816v5.496H3.168c.576-.576 1.176-1.152 1.728-1.728l1.68-1.68-.552-.528-4.344 4.344z" }));
}
export default BuyCryptoUltraLight;
