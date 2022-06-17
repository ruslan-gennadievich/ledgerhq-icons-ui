import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function StreamMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 7.548h13.92v-2.04H2.64v2.04zm0 10.944h13.92v-2.04H2.64v2.04zm4.8-5.472h13.92v-2.04H7.44v2.04z" }));
}
export default StreamMedium;
