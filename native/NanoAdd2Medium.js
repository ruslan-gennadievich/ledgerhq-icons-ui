import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NanoAdd2Medium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 21.36h18.72v-6.84H2.664l-.024 6.84zm1.68-1.68l.024-3.48H10.2a3.307 3.307 0 00-.48 1.752c0 .624.168 1.224.48 1.728H4.32zm7.08-1.728c0-.96.792-1.752 1.68-1.752h6.6v3.48h-6.6c-.888 0-1.68-.792-1.68-1.728zm1.008 0c0 .48.408.888.888.888.48 0 .912-.408.912-.888a.927.927 0 00-.912-.912c-.48 0-.888.408-.888.912z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12 12a5 5 0 100-10 5 5 0 000 10zm-.75-8v2.25H9v1.5h2.25V10h1.5V7.75H15v-1.5h-2.25V4h-1.5z" }));
}
export default NanoAdd2Medium;
