import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronBottomMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.272 6.78L2.928 8.124 12 17.22l9.072-9.096-1.344-1.344L12 14.484 4.272 6.78z" }));
}
export default ChevronBottomMedium;
