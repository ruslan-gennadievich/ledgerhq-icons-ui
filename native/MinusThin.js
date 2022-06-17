import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MinusThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.4 11.76H3.6v.48h16.8v-.48z" }));
}
export default MinusThin;
