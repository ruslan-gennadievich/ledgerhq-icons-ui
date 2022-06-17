import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DropupMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 8l5.712 5.736-1.344 1.344L12 10.736 7.632 15.08l-1.344-1.344L12 8z" }));
}
export default DropupMedium;
