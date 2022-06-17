import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledLeftThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.064 16.344l.336-.336-1.704-1.704-2.064-2.064h9.408v-.48H7.632l2.064-2.064L11.4 7.992l-.336-.336L6.72 12l4.344 4.344zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4z" }));
}
export default CircledLeftThin;
