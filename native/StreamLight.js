import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function StreamLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 7.152h13.92V5.904H2.64v1.248zm0 10.944h13.92v-1.248H2.64v1.248zm4.8-5.472h13.92v-1.248H7.44v1.248z" }));
}
export default StreamLight;
