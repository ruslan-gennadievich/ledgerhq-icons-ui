import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MenuBurgerUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.82 6.888h18.36v-.84H2.82v.84zm0 11.04h18.36v-.84H2.82v.84zm0-5.52h18.36v-.84H2.82v.84z" }));
}
export default MenuBurgerUltraLight;
