import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PenThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 21.36l5.16-1.44L21.36 6.384 17.616 2.64 4.08 16.2l-1.44 5.16zm.696-.696l1.176-4.224 3.048 3.048-4.224 1.176zm1.512-4.56L14.976 5.976l3.048 3.048L7.896 19.152l-3.048-3.048zM15.312 5.616l2.304-2.304 3.072 3.072-2.328 2.304-3.048-3.072z" }));
}
export default PenThin;
