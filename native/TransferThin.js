import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function TransferThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.016 12.288l4.344-4.344L17.016 3.6l-.336.336 1.872 1.872 1.896 1.896H3.6v.48h16.848l-1.896 1.896-1.872 1.872.336.336zM2.64 16.056L6.984 20.4l.336-.336-1.872-1.872-1.896-1.896H20.4v-.48H3.552l1.896-1.896 1.872-1.872-.336-.336-4.344 4.344z" }));
}
export default TransferThin;
