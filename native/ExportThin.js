import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ExportThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.12 20.4h17.76v-6.72h-.48v6.24H3.6v-6.24h-.48v6.72zM7.656 7.944l.336.336 1.872-1.872 1.896-1.896V16.56h.48V4.512l1.896 1.896 1.872 1.872.336-.336L12 3.6 7.656 7.944z" }));
}
export default ExportThin;
