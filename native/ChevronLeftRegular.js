import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronLeftRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.028 19.848L9.18 12l7.848-7.848-1.104-1.104L6.972 12l8.952 8.952 1.104-1.104z" }));
}
export default ChevronLeftRegular;
