import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DropdownRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 15.348l5.592-5.592-1.104-1.104L12 13.14 7.512 8.652 6.408 9.756 12 15.348z" }));
}
export default DropdownRegular;
