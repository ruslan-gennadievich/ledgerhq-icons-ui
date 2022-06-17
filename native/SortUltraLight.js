import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function SortUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.288 6.984L7.944 2.64 3.6 6.984l.552.552 1.68-1.68a116.5 116.5 0 001.704-1.728V20.4h.816V4.104c.576.6 1.152 1.176 1.728 1.752l1.68 1.68.528-.552zm-.576 10.032l4.344 4.344 4.344-4.344-.552-.552-1.656 1.68c-.576.552-1.152 1.152-1.728 1.728V3.6h-.816v16.272c-.576-.576-1.152-1.176-1.728-1.728l-1.656-1.68-.552.552z" }));
}
export default SortUltraLight;
