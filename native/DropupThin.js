import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DropupThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 9.228l5.208 5.208-.336.336L12 9.9l-4.872 4.872-.336-.336L12 9.228z" }));
}
export default DropupThin;
