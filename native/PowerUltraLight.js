import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PowerUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.296 22.332l8.976-12.6H12.84l.864-8.064-8.976 12.624h6.408l-.84 8.04zM6.288 13.5l6.408-9.072L12 10.5h5.712l-6.408 9.096L12 13.5H6.288z" }));
}
export default PowerUltraLight;
