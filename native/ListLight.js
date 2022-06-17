import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ListLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M7.08 7.08h14.16v-1.2H7.08v1.2zm-4.32 11.4h1.92v-1.92H2.76v1.92zm0-5.52h1.92v-1.92H2.76v1.92zm0-5.52h1.92V5.52H2.76v1.92zm4.32 10.68h14.16v-1.2H7.08v1.2zm0-5.52h14.16v-1.2H7.08v1.2z" }));
}
export default ListLight;
