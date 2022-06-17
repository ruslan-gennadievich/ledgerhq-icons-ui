import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ChevronRightRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M6.972 19.848l1.104 1.104L17.028 12 8.076 3.048 6.972 4.152 14.82 12l-7.848 7.848z" }));
}
export default ChevronRightRegular;
