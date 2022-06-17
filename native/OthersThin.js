import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function OthersThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M18.96 12.72h1.44v-1.44h-1.44v1.44zm-15.36 0h1.44v-1.44H3.6v1.44zm7.68 0h1.44v-1.44h-1.44v1.44z" }));
}
export default OthersThin;
