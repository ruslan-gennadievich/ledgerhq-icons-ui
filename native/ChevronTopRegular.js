import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronTopRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.152 17.028L12 9.18l7.848 7.848 1.104-1.104L12 6.972l-8.952 8.952 1.104 1.104z" }));
}
export default ChevronTopRegular;
