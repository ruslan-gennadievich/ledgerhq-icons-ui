import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MinusMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.4 10.98H3.6v2.04h16.8v-2.04z" }));
}
export default MinusMedium;
