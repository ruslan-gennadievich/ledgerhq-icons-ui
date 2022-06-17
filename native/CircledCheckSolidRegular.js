import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledCheckSolidRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.24c5.184 0 9.24-4.2 9.24-9.24 0-5.16-4.08-9.24-9.24-9.24S2.76 6.84 2.76 12s4.08 9.24 9.24 9.24zm-5.016-9.672l1.104-1.08 3.096 3.072 5.424-5.4 1.08 1.104-6.504 6.528-4.2-4.224z" }));
}
export default CircledCheckSolidRegular;
