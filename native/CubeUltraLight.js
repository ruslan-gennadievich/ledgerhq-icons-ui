import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CubeUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.988 22.056l8.736-5.064V7.008l-8.736-5.064-8.712 5.064v9.984l8.712 5.064zm-7.872-5.52V7.944l7.464 4.296v8.64l-7.464-4.344zM4.5 7.224l7.488-4.344 7.488 4.344-7.488 4.32L4.5 7.224zm7.896 13.656v-8.64l7.488-4.296v8.592l-7.488 4.344z" }));
}
export default CubeUltraLight;
