import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FullnodeUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.192c4.344 0 7.704-1.272 7.704-3.384V6.144c0-2.064-3.24-3.336-7.704-3.336-4.344 0-7.704 1.248-7.704 3.336v11.664c0 2.088 3.288 3.384 7.704 3.384zm-6.864-3.384v-2.352C6.264 16.608 8.832 17.28 12 17.28c3.12 0 5.712-.696 6.864-1.824v2.352c0 1.464-2.736 2.52-6.864 2.52-4.2 0-6.864-1.056-6.864-2.52zm0-3.864v-2.352c1.128 1.152 3.696 1.824 6.864 1.824 3.12 0 5.712-.672 6.864-1.848v2.376c0 1.44-2.736 2.568-6.864 2.568-4.2 0-6.864-1.128-6.864-2.568zm0-3.912V7.704c1.128 1.152 3.696 1.8 6.864 1.8 3.12 0 5.712-.648 6.864-1.8v2.328c0 1.488-2.736 2.616-6.864 2.616-4.2 0-6.864-1.128-6.864-2.616zm0-3.888c0-1.44 2.736-2.496 6.864-2.496 4.248 0 6.864 1.056 6.864 2.496 0 1.512-2.736 2.592-6.864 2.592-4.2 0-6.864-1.08-6.864-2.592z" }));
}
export default FullnodeUltraLight;
