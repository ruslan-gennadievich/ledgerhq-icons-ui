import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowDownThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.8 20.16h9.36V10.8h-.456V19.368L4.176 3.84l-.336.336 15.528 15.528H10.8v.456z" }));
}
export default ArrowDownThin;
