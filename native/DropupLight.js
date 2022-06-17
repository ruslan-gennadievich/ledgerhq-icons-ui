import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DropupLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 8.844l5.472 5.448-.864.864L12 10.524l-4.608 4.632-.864-.864L12 8.844z" }));
}
export default DropupLight;
