import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NanoXRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.664 22.32l4.656-4.656L6.312 1.68 1.68 6.336 17.664 22.32zM3.624 6.336l2.688-2.712 6.456 6.432c-.672.048-1.32.36-1.872.864a2.92 2.92 0 00-.84 1.824L3.624 6.336zm1.704.024c0 .552.456 1.008 1.008 1.008.576 0 1.056-.456 1.056-1.008 0-.576-.48-1.056-1.056-1.056-.552 0-1.008.48-1.008 1.056zm6.504 8.184c-.696-.72-.672-1.92.048-2.664.768-.72 1.944-.72 2.64-.048l5.856 5.832-2.712 2.712-5.832-5.832zm.48-1.2a1.04 1.04 0 001.032 1.032c.552 0 1.032-.48 1.032-1.032a1.04 1.04 0 00-1.032-1.032c-.576 0-1.032.456-1.032 1.032z" }));
}
export default NanoXRegular;
