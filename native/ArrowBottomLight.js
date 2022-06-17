import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowBottomLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.372l6.624-6.648-.744-.768-3.264 3.288c-.672.672-1.368 1.368-2.04 2.064V2.628h-1.152v16.68a165.534 165.534 0 00-2.016-2.064l-3.264-3.288-.768.768L12 21.372z" }));
}
export default ArrowBottomLight;
