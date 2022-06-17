import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function VoteUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.26 21.36h15.48V2.64H9.612L4.26 7.992V21.36zm.84-.816V8.664h5.208V3.456H18.9v17.088H5.1zM5.412 7.92l4.152-4.152V7.92H5.412zM8.004 12l3.168 3.192 5.496-5.52-.576-.576-4.92 4.896-2.592-2.568-.576.576z" }));
}
export default VoteUltraLight;
