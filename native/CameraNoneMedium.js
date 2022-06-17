import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CameraNoneMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M22 17.975V6.5h-5l-2-3H9l-.59.885 1.37 1.37.237-.355h3.966l2 3H20.1v7.675l1.9 1.9z" }),
        React.createElement(Path, { d: "M16.162 12.137a4.255 4.255 0 00-3.3-3.3l3.3 3.3z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M4.512 3.17l-1.34-1.342-1.344 1.344L5.156 6.5H2v14h17.156l1.672 1.672 1.34-1.34L4.51 3.171l.002-.003zm10.316 13.002l2.428 2.428H3.9V8.4h3.156l1.772 1.771a4.25 4.25 0 006 6zm-4.653-4.653l3.306 3.306a2.35 2.35 0 01-3.306-3.306z" }));
}
export default CameraNoneMedium;
