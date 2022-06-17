import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CloseUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M19.872 19.248L12.624 12l7.248-7.248-.624-.624L12 11.376 4.752 4.128l-.624.624L11.376 12l-7.248 7.248.624.624L12 12.624l7.248 7.248.624-.624z" }));
}
export default CloseUltraLight;
