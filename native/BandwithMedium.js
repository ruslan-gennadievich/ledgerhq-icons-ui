import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function BandwithMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M19.26 20.4h2.04V3.6h-2.04v16.8zm-16.56 0h2.04v-4.248H2.7V20.4zm4.128 0h2.04v-7.392h-2.04V20.4zm4.152 0h2.04V9.864h-2.04V20.4zm4.152 0h2.04V6.72h-2.04V20.4z" }));
}
export default BandwithMedium;
