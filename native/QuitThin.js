import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function QuitThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.08 21.36H21.6V2.64H10.08v5.04h.48V3.12h10.56v17.76H10.56v-4.56h-.48v5.04zM2.4 12l4.344 4.344.336-.336-1.872-1.872-1.896-1.896H15.84v-.48H3.312l1.896-1.896L7.08 7.992l-.336-.336L2.4 12z" }));
}
export default QuitThin;
