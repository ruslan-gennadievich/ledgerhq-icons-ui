import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function StreamThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 6.768h13.92v-.48H2.64v.48zm0 10.944h13.92v-.48H2.64v.48zm4.8-5.472h13.92v-.48H7.44v.48z" }));
}
export default StreamThin;
