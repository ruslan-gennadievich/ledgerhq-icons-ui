import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function OneCircledMediThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.6 11.904v4.56h.48v-8.88h-1.272l-3.264 3.048v.648L12 8.064h.6v3.84zM5.76 20.88h12.48v-.48H5.76v.48zm0-17.28h12.48v-.48H5.76v.48z" }));
}
export default OneCircledMediThin;
