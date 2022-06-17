import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MenuBurgerMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M7.44 7.44h13.92V5.52H7.44v1.92zm-4.8 11.28h18.72v-2.4H2.64v2.4zm0-5.52h18.72v-2.4H2.64v2.4zm0-5.52h18.72v-2.4H2.64v2.4zm4.8 10.8h13.92v-1.92H7.44v1.92zm0-5.52h13.92v-1.92H7.44v1.92z" }));
}
export default MenuBurgerMedium;
