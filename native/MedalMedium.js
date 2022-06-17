import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MedalMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M6.84 13.776v8.064L12 18.96l5.16 2.88v-8.064a6.827 6.827 0 001.8-4.656c0-3.84-3.12-6.96-6.96-6.96S5.04 5.28 5.04 9.12c0 1.8.672 3.432 1.8 4.656zm.12-4.656a5.04 5.04 0 1110.08 0 5.04 5.04 0 11-10.08 0zm1.68 9.768v-3.672a6.927 6.927 0 003.36.864 6.927 6.927 0 003.36-.864v3.672L12 16.992l-3.36 1.896z" }));
}
export default MedalMedium;
