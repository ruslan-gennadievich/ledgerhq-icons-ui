import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PortfolioUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 19.92h18.72v-.84H3.48v-15h-.84v15.84zm2.352-4.368l5.904-5.856 2.88 2.88L21 5.352l-.576-.576-6.648 6.648-2.88-2.88-5.904 5.88v1.128z" }));
}
export default PortfolioUltraLight;
