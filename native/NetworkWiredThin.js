import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NetworkWiredThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.6 21.36h7.44v-6H7.56v-3.12h8.88v3.12h-3.48v6h7.44v-6h-3.48v-3.12h4.92v-.48h-9.6V8.64h3.48v-6H8.28v6h3.48v3.12h-9.6v.48h4.92v3.12H3.6v6zm.48-.48v-5.04h6.48v5.04H4.08zM8.76 8.16V3.12h6.48v5.04H8.76zm4.68 12.72v-5.04h6.48v5.04h-6.48z" }));
}
export default NetworkWiredThin;
