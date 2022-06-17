import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function VoteNoneMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 11.78l1.786-1.787L15 11.206l-1.787 1.787L15 14.778l-1.213 1.213L12 14.207l-1.787 1.787L9 14.778l1.787-1.787L9 11.207l1.214-1.213L12 11.779z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M4.08 21.36h15.84V2.64H9.432L4.08 7.992V21.36zM6 19.56V8.712h4.272V4.44H18v15.12H6z" }));
}
export default VoteNoneMedium;
