import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FourCircledMediMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.904 12.408v.696H9.672l2.256-3.408h.024c-.024.792-.048 1.8-.048 2.712zM5.76 21.36h12.48v-1.92H5.76v1.92zm0-16.8h12.48V2.64H5.76v1.92zm2.136 10.104h4.008v1.8h1.8v-1.8h1.368v-1.56h-1.368v-5.52h-2.016l-3.792 5.712v1.368z" }));
}
export default FourCircledMediMedium;
