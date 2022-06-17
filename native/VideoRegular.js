import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function VideoRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3.532 9.439a3.887 3.887 0 001.813 1.024h-3.05v10.725h15.553V17.73l3.857 3.206V10l-3.857 3.439v-2.976h-3.046a3.887 3.887 0 002.952-3.768 3.887 3.887 0 00-3.883-3.883 3.887 3.887 0 00-3.798 3.082 3.886 3.886 0 00-3.797-3.082 3.888 3.888 0 00-3.883 3.883A3.887 3.887 0 003.532 9.44zm7.596 0a3.887 3.887 0 001.813 1.024H7.206a3.887 3.887 0 002.867-2.968c.155.73.518 1.408 1.055 1.944zM4.453 4.872a2.582 2.582 0 011.823-.757 2.582 2.582 0 012.579 2.58 2.582 2.582 0 01-2.579 2.58 2.582 2.582 0 01-2.58-2.58c0-.684.273-1.34.757-1.823zm7.595 0a2.582 2.582 0 011.823-.757 2.582 2.582 0 012.58 2.58 2.582 2.582 0 01-2.58 2.58 2.582 2.582 0 01-2.579-2.58c0-.684.273-1.34.756-1.823zm-8.45 15.013h12.947v-8.12H3.598v8.12zm16.804-1.724l-2.554-2.126v-.845l2.554-2.28v5.25z" }));
}
export default VideoRegular;
