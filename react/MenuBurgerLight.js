import * as React from "react";
import Svg from "./StyledSvg";
function MenuBurgerLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.76 7.08h18.48v-1.2H2.76v1.2zM3 18.12h18.24v-1.2H3v1.2zm0-5.52h18.24v-1.2H3v1.2z" }));
}
export default MenuBurgerLight;
