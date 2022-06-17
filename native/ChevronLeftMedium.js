import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronLeftMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.22 19.728L9.516 12l7.704-7.728-1.344-1.344L6.78 12l9.096 9.072 1.344-1.344z" }));
}
export default ChevronLeftMedium;
