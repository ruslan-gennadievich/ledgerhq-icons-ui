import * as React from "react";
import Svg from "./StyledSvg";
function BuyCryptoThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 12h.48V6.336h18.288l-1.896 1.896-1.872 1.872.336.336 4.344-4.344-4.344-4.344-.336.336 1.872 1.872 1.896 1.896H2.64V12zm-.96 5.904l4.344 4.344.336-.336-1.872-1.872-1.896-1.896H21.36V12h-.48v5.664H2.592l1.896-1.896 1.872-1.872-.336-.336-4.344 4.344z" }));
}
export default BuyCryptoThin;
