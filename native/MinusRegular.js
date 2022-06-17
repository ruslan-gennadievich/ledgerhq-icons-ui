import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MinusRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.4 11.184H3.6v1.632h16.8v-1.632z" }));
}
export default MinusRegular;
