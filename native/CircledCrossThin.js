import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledCrossThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M8.52 15.816l3.48-3.48 3.48 3.48.336-.336-3.48-3.48 3.48-3.48-.336-.336-3.48 3.48-3.48-3.48-.336.336 3.48 3.48-3.48 3.48.336.336zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4z" }));
}
export default CircledCrossThin;
