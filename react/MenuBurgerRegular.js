import * as React from "react";
import Svg from "./StyledSvg";
function MenuBurgerRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.7 7.248h18.6v-1.56H2.7v1.56zm0 11.04h18.6v-1.56H2.7v1.56zm0-5.52h18.6v-1.56H2.7v1.56z" }));
}
export default MenuBurgerRegular;
