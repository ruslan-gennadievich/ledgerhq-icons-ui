import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CubeLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 22.152l8.808-5.136V6.984L12 1.848 3.192 6.984v10.032L12 22.152zm-7.608-5.76V8.28l7.032 4.056v8.136l-7.032-4.08zm.552-9.096L12 3.192l7.056 4.104L12 11.352 4.944 7.296zm7.632 13.176v-8.136l7.032-4.056v8.112l-7.032 4.08z" }));
}
export default CubeLight;
