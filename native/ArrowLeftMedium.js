import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowLeftMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M9.276 18.624l1.2-1.176-3.384-3.36a29.775 29.775 0 00-1.248-1.176h15.528v-1.824H5.844c.432-.384.864-.792 1.248-1.176l3.384-3.36-1.2-1.176L2.628 12l6.648 6.624z" }));
}
export default ArrowLeftMedium;
