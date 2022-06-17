import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ManagerThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.84 20.172v-6.48h6.48v6.48H3.84zm-.48.48h7.44v-7.44H3.36v7.44zm0-9.864h7.44v-7.44H3.36v7.44zm.48-.48v-6.48h6.48v6.48H3.84zm9.36 10.344h7.44v-7.44H13.2v7.44zm0-9.84h7.44v-7.44H13.2v7.44zm.48 9.36v-6.48h6.48v6.48h-6.48zm0-9.84v-6.48h6.48v6.48h-6.48z" }));
}
export default ManagerThin;
