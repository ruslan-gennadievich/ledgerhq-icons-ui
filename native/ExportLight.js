import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ExportLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.88 20.52h18.24v-6.96h-1.2v5.76H4.08v-5.76h-1.2v6.96zM7.656 7.824l.768.744 1.464-1.464c.504-.504 1.032-1.032 1.536-1.56V16.44h1.152V5.52c.528.528 1.032 1.08 1.56 1.584L15.6 8.568l.768-.744L12 3.48 7.656 7.824z" }));
}
export default ExportLight;
