import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ShareThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M4.08 20.4h15.84V12h-3.6v.48h3.12v7.44H4.56v-7.44h3.12V12h-3.6v8.4zM7.656 7.944l.336.336 1.872-1.872 1.896-1.896V16.56h.48V4.512l1.896 1.896 1.872 1.872.336-.336L12 3.6 7.656 7.944z" }));
}
export default ShareThin;
