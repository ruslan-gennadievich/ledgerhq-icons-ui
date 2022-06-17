import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledCheckLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM4.08 12c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92zm3.864.048l3.24 3.264 5.568-5.568-.84-.84-4.728 4.704-2.4-2.4-.84.84z" }));
}
export default CircledCheckLight;
