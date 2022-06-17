import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function Filters2Medium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M9.584 20.813v-9.277L5.25 7.026V3.188h13.5v3.828l-4.147 4.51v4.482l-5.02 4.805zM6.852 6.37l4.334 4.51v6.172L13 15.315v-4.422l4.147-4.512V4.796H6.852V6.37z" }));
}
export default Filters2Medium;
