import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CloseLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.016 19.104L12.912 12l7.104-7.104-.912-.912L12 11.088 4.896 3.984l-.912.912L11.088 12l-7.104 7.104.912.912L12 12.912l7.104 7.104.912-.912z" }));
}
export default CloseLight;
