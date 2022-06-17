import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CoinThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.752 21.84h2.592c3.432 0 6.144-4.488 6.144-9.84 0-5.352-2.712-9.84-6.144-9.84h-2.592c-3.528 0-6.24 4.488-6.24 9.84 0 5.352 2.712 9.84 6.24 9.84zM4.992 12c0-5.16 2.568-9.36 5.76-9.36 3.096 0 5.712 4.2 5.712 9.36 0 5.16-2.616 9.36-5.712 9.36-3.192 0-5.76-4.2-5.76-9.36zm7.68 9.36c2.472-1.296 4.272-5.04 4.272-9.36 0-4.32-1.8-8.064-4.272-9.36h.672c3.096 0 5.664 4.2 5.664 9.36 0 5.16-2.568 9.36-5.664 9.36h-.672z" }));
}
export default CoinThin;
