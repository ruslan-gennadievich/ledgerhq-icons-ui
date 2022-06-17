import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function WarningRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M1.944 20.12h20.112L12 1.88 1.944 20.12zm2.568-1.464L12 5.072l7.488 13.584H4.512zm6.456-1.416h2.04V15.2h-2.04v2.04zm.24-6.024l.168 2.544h1.248l.168-2.544V9.128h-1.584v2.088z" }));
}
export default WarningRegular;
