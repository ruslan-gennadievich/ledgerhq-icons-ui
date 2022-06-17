import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DashboardRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.88 20.268h18.24v-1.536H4.44V4.428H2.88v15.84zm4.032-3.696h1.632v-5.64H6.912v5.64zm4.104 0h1.656V6.108h-1.656v10.464zm4.128 0h1.632V8.508h-1.632v8.064zm4.104 0h1.656V3.732h-1.656v12.84z" }));
}
export default DashboardRegular;
