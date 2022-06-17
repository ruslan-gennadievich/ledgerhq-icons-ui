import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ActivityUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M1.908 12.456h4.176l2.808-8.4 6.168 18.552 3.432-10.152h3.6v-.864h-4.2l-2.832 8.352L8.892 1.392l-3.384 10.2h-3.6v.864z" }));
}
export default ActivityUltraLight;
