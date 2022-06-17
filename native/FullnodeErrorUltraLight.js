import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FullnodeErrorUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.98 20.676c.504 0 .984-.024 1.464-.072l.912-.912c-.744.072-1.536.12-2.376.12-4.2 0-6.864-1.056-6.864-2.52v-2.328c1.128 1.128 3.696 1.8 6.864 1.8.6 0 1.176-.024 1.752-.072l-.384-.384.384-.384c-.576.048-1.152.072-1.752.072-4.2 0-6.864-1.128-6.864-2.568v-2.352C5.244 12.228 7.812 12.9 10.98 12.9c3.12 0 5.712-.672 6.864-1.848v3.12l.408.408.432-.432v-8.52c0-2.088-3.24-3.336-7.704-3.336-4.344 0-7.704 1.248-7.704 3.336v11.664c0 2.088 3.288 3.384 7.704 3.384zM4.116 9.516V7.188c1.128 1.152 3.696 1.8 6.864 1.8 3.12 0 5.712-.672 6.864-1.824v2.352c0 1.488-2.736 2.616-6.864 2.616-4.2 0-6.864-1.128-6.864-2.616zm0-3.888c0-1.44 2.736-2.496 6.864-2.496 4.248 0 6.864 1.056 6.864 2.496 0 1.512-2.736 2.592-6.864 2.592-4.2 0-6.864-1.08-6.864-2.592zm10.32 15.504l.576.576 2.568-2.568 2.568 2.568.576-.576-2.568-2.568 2.568-2.568-.576-.576-2.568 2.568-2.568-2.568-.576.576 2.568 2.568-2.568 2.568z" }));
}
export default FullnodeErrorUltraLight;
