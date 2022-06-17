import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function GraduationThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.539 9.068l-4.26-1.683 10.723-4.197L22.72 7.385l-4.039 1.611v6.862l1.75 2.21-1.859 2.744-1.887-2.744 1.588-1.975h-.019V13.95l-6.253 2.34-6.463-2.433v-4.79zm.427.168l6.088 2.404 6.162-2.458v4.327l-6.214 2.324-6.036-2.27V9.235zm11.754-.315l-5.666 2.26L2.45 7.387l9.556-3.743 9.556 3.744-3.234 1.29L12.2 6.562l-.14.405 5.66 1.954zm-.502 9.167l1.352 1.967 1.333-1.968-1.332-1.683-1.353 1.684z" }));
}
export default GraduationThin;
