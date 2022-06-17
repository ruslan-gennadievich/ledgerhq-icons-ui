import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ShareLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.84 20.52h16.32v-8.88h-3.84v1.2h2.64v6.48H5.04v-6.48h2.64v-1.2H3.84v8.88zM7.656 7.824l.768.744 1.464-1.464a94.76 94.76 0 001.536-1.56V16.44h1.152V5.52c.528.528 1.032 1.08 1.56 1.584L15.6 8.568l.768-.744L12 3.48 7.656 7.824z" }));
}
export default ShareLight;
