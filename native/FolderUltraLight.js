import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FolderUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3 20.04h18V5.808h-9l-1.176-1.176c-.48-.48-.96-.672-1.656-.672H3v16.08zm.84-.816V9.696h16.32v9.528H3.84zm0-10.344V4.776h5.328c.48 0 .72.072 1.056.432l1.416 1.416h8.52V8.88H3.84z" }));
}
export default FolderUltraLight;
