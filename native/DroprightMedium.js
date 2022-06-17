import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DroprightMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M16 12l-5.736 5.712-1.344-1.344L13.264 12 8.92 7.632l1.344-1.344L16 12z" }));
}
export default DroprightMedium;
