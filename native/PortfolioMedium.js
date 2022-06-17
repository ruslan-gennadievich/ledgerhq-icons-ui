import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PortfolioMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 19.92h18.72v-1.872H4.56V4.08H2.64v15.84zM6.24 15l4.656-4.584 2.88 2.88 7.584-7.584-1.296-1.296-6.288 6.288-2.88-2.88-4.656 4.632V15z" }));
}
export default PortfolioMedium;
