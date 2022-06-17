import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NotificationsMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M22 18v-2h-2.5v-6c0-4.418-3.358-8-7.5-8-4.142 0-7.5 3.582-7.5 8v6H2v2h20zM6.5 16v-6c0-3.437 2.582-6 5.5-6s5.5 2.563 5.5 6v6h-11z" }),
        React.createElement(Path, { d: "M9 22h6v-2H9v2z" }));
}
export default NotificationsMedium;
