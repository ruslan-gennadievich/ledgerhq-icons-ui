import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowTopRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.256 5.268v16.104h1.488V5.268c.528.552 1.08 1.128 1.608 1.656l3.312 3.336.96-.984L12 2.628 5.376 9.276l.96.984 3.312-3.336c.528-.528 1.08-1.104 1.608-1.656z" }));
}
export default ArrowTopRegular;
