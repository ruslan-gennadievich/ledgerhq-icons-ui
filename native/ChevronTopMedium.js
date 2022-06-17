import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronTopMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.272 17.22L12 9.516l7.728 7.704 1.344-1.344L12 6.78l-9.072 9.096 1.344 1.344z" }));
}
export default ChevronTopMedium;
