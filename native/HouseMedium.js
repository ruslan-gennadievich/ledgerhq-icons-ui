import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function HouseMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.32 21.36h6.72v-6.72h1.92v6.72h6.72v-9.24l1.344 1.224L22.32 12 12 2.64 1.68 12l1.296 1.344L4.32 12.12v9.24zm1.848-1.8v-9.12L12 5.136l5.832 5.304v9.12H14.64v-6.6H9.36v6.6H6.168z" }));
}
export default HouseMedium;
