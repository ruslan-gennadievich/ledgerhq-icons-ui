import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function BarChartLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M16.584 20.88h4.776V3.12h-4.776v17.76zm-13.944 0h4.776V7.368H2.64V20.88zm1.08-1.08V8.448h2.616V19.8H3.72zm5.88 1.08h4.8V10.824H9.6V20.88zm1.08-1.08v-7.896h2.64V19.8h-2.64zm6.984 0V4.2h2.616v15.6h-2.616z" }));
}
export default BarChartLight;
