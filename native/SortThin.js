import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function SortThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.288 6.984L7.944 2.64 3.6 6.984l.336.336 1.872-1.872 1.896-1.896V20.4h.48V3.552l1.896 1.896 1.872 1.872.336-.336zm-.576 10.032l4.344 4.344 4.344-4.344-.336-.336-1.872 1.872-1.896 1.896V3.6h-.48v16.848l-1.896-1.896-1.872-1.872-.336.336z" }));
}
export default SortThin;
