import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowRightUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M14.748 18.624L21.372 12l-6.624-6.624-.552.552 3.216 3.216 2.472 2.448H2.628v.816h17.256l-2.472 2.448-3.216 3.216.552.552z" }));
}
export default ArrowRightUltraLight;
