import * as React from "react";
import { Path, Circle } from "react-native-svg";
import Svg from "./StyledSvg";
function NanoFoldedOnMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.832 18.48c-.72 0-1.272-.6-1.272-1.272 0-.696.552-1.248 1.272-1.248a1.24 1.24 0 011.248 1.248c0 .672-.552 1.272-1.248 1.272z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M11.023 4.427L9.24 2.64 3.504 8.376l4.728 4.704H1.92v8.28h16.032c2.256 0 4.128-1.872 4.128-4.152 0-1.056-.384-2.064-1.08-2.784l-2.44-2.446a6.987 6.987 0 01-2.936-.392l1.488 1.494h-6.336L6.048 8.376 9.24 5.184l2.167 2.173a6.986 6.986 0 01-.384-2.93zM3.72 14.88v4.68h14.232c1.272 0 2.328-1.056 2.328-2.352a2.346 2.346 0 00-2.328-2.328H3.72z" }),
        React.createElement(Circle, { cx: 18, cy: 5, r: 4 }));
}
export default NanoFoldedOnMedium;
