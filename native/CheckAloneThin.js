import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CheckAloneThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.232 12.66L8.4 18.828l13.368-13.32-.336-.336L8.4 18.156l-5.832-5.832-.336.336z" }));
}
export default CheckAloneThin;
