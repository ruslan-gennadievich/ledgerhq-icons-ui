import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PlusMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.4 10.968h-7.368V3.6h-2.04v7.368H3.6v2.04h7.392V20.4h2.04v-7.392H20.4v-2.04z" }));
}
export default PlusMedium;
