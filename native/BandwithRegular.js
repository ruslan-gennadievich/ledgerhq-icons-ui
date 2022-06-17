import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function BandwithRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M19.488 20.4h1.656V3.6h-1.656v16.8zm-16.632 0h1.656v-4.248H2.856V20.4zm4.152 0h1.656v-7.392H7.008V20.4zm4.176 0h1.632V9.864h-1.632V20.4zm4.152 0h1.656V6.72h-1.656V20.4z" }));
}
export default BandwithRegular;
