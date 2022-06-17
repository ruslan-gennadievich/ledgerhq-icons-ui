import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NineCircledLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM4.08 12c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92zm4.8 1.896c.168 1.704 1.464 2.808 3.192 2.808 2.256 0 3.528-1.872 3.504-4.8-.024-2.856-1.32-4.56-3.504-4.56-1.728 0-3.12 1.32-3.12 3.12 0 1.752 1.272 3.048 2.976 3.048 1.056 0 1.944-.528 2.304-1.416h.144c.072 2.064-.504 3.528-2.328 3.528-1.176 0-1.848-.576-1.968-1.728h-1.2zm1.248-3.264v-.408c0-1.128.672-1.8 1.92-1.8h.144c1.272 0 1.92.744 1.92 1.8v.408c0 1.128-.672 1.8-1.92 1.8h-.144c-1.248 0-1.92-.672-1.92-1.8z" }));
}
export default NineCircledLight;
