import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledUpMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.088 9.936v7.104h1.824V9.888c.408.456.792.888 1.2 1.296l1.08 1.056 1.176-1.176L12 6.72l-4.344 4.344 1.2 1.176 1.056-1.056c.384-.384.792-.816 1.176-1.248zM2.64 12c0 5.232 4.128 9.36 9.36 9.36 5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36zm1.92 0c0-4.176 3.264-7.44 7.44-7.44s7.44 3.264 7.44 7.44c0 4.056-3.264 7.44-7.44 7.44S4.56 16.176 4.56 12z" }));
}
export default CircledUpMedium;
