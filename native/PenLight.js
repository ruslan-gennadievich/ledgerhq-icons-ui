import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PenLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.244 21.756l6.168-1.704L21.756 6.756l-4.512-4.512L3.948 15.588l-1.704 6.168zm1.632-1.632l1.08-3.96 2.88 2.88-3.96 1.08zm1.896-4.752l8.76-8.784 2.88 2.88-8.784 8.76-2.856-2.856zm9.552-9.576l1.944-1.944 2.88 2.88-1.944 1.944-2.88-2.88z" }));
}
export default PenLight;
