import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledLeftLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.064 16.344l.768-.768-1.392-1.392a53.112 53.112 0 00-1.656-1.608h8.256v-1.152H8.76c.576-.552 1.128-1.08 1.68-1.632L11.832 8.4l-.768-.768L6.72 12l4.344 4.344zM2.88 12c0 5.088 4.032 9.12 9.12 9.12 5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12zm1.2 0c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92z" }));
}
export default CircledLeftLight;
