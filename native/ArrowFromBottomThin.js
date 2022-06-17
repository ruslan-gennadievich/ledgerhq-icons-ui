import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowFromBottomThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.76 4.032V17.04h.48V4.032l2.688 2.688 2.232 2.232.336-.336L12 3.12 6.504 8.616l.336.336L9.072 6.72l2.688-2.688zM3.6 20.88h16.8v-.48H3.6v.48z" }));
}
export default ArrowFromBottomThin;
