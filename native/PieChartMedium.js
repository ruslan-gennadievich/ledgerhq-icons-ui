import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PieChartMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M21.4 10.9v-.95a7.45 7.45 0 00-7.45-7.45H13v8.4h8.4zm-2.322-3.074c.156.379.27.772.34 1.174H14.9V4.482a5.55 5.55 0 014.178 3.344z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M10.95 4.5a8.45 8.45 0 108.45 8.45V12h-7.5V4.5h-.95zM7.311 7.504A6.55 6.55 0 0110 6.469V13.9h7.43A6.549 6.549 0 117.312 7.504z" }));
}
export default PieChartMedium;
