import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MailUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3 18.972h18V5.028H3v13.944zm.84-.816v-9.48L12 15.204l8.16-6.528v9.48H3.84zm0-10.56V5.844h16.32v1.752L12 14.124 3.84 7.596z" }));
}
export default MailUltraLight;
