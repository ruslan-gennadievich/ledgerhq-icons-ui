import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CrownUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3 16.356h18V5.124L15.792 9.06 12 4.284 8.208 9.06 3 5.124v11.232zm0 3.36h18V18.9H3v.816zm.84-4.176V6.78l4.512 3.408L12 5.604l3.648 4.584 4.536-3.408v8.76H3.84z" }));
}
export default CrownUltraLight;
