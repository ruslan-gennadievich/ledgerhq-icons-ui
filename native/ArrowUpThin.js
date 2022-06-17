import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowUpThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.176 20.16L19.704 4.632V13.2h.456V3.84H10.8v.456H19.368L3.84 19.824l.336.336z" }));
}
export default ArrowUpThin;
