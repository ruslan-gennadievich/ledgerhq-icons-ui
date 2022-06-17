import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function Filters2Light({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M9.7 20.813v-9.228L5.063 6.833V3.187h13.875v3.639L14.5 11.58v4.71L9.7 20.812zM6.206 6.376l4.637 4.751v7.047l2.515-2.368v-4.67l4.436-4.755V4.318H6.206v2.058z" }));
}
export default Filters2Light;
