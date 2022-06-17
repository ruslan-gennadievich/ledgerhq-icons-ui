import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NanoSMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.472 22.32l4.848-4.848-9.288-9.288.672-.672L12 5.808l-.672.672-1.92-1.896.696-.696L8.4 2.184l-.696.696-1.2-1.2L1.68 6.528 17.472 22.32zM4.056 6.528l2.448-2.472 6.024 6a3.63 3.63 0 00-1.608.912c-.432.432-.72.984-.864 1.56l-6-6zm7.992 8.016c-.624-.648-.576-1.728.072-2.4.696-.672 1.776-.672 2.4-.072l5.424 5.4-2.472 2.472-5.424-5.4zm.552-1.032c0 .48.408.888.888.888.48 0 .912-.408.912-.888a.927.927 0 00-.912-.912c-.48 0-.888.408-.888.912z" }));
}
export default NanoSMedium;
