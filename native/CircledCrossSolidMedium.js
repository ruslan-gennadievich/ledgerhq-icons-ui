import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CircledCrossSolidMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.36c5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36 0 5.232 4.128 9.36 9.36 9.36zm-4.8-5.904L10.632 12 7.2 8.544 8.544 7.2 12 10.632 15.456 7.2 16.8 8.544 13.368 12l3.432 3.456-1.344 1.344L12 13.368 8.544 16.8 7.2 15.456z" }));
}
export default CircledCrossSolidMedium;
