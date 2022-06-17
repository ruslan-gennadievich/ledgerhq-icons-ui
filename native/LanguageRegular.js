import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function LanguageRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M16.018 10.211H14.94l-1.534 5.313h.79l.357-1.288h1.806l.335 1.288h.812l-1.488-5.313zm-.496.865l.645 2.46h-1.426l.675-2.46h.106z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M8.726 15.409l-5.58-4.961v-7.26H13.93v5.29h6.925v7.373l-5.51 4.961.94-3.545h-6.233V11.83H7.859l.867 3.58zm4.223-11.24v4.309h-2.897v.251a2.636 2.636 0 01-.447-.105c.533-.675.712-1.467.772-1.97h.453v-.982H9.225v-.815h-.982v.815H6.638v.982h2.748c-.06.4-.218.982-.62 1.443a1.985 1.985 0 01-.48-.844l-.48.101-.48.097a2.873 2.873 0 00.631 1.217c-.37.15-.807.221-1.309.212l-.02.981h.116c.803 0 1.49-.174 2.053-.519.335.18.748.322 1.255.38v1.125H6.61l.422 1.744-2.906-2.584V4.169h8.822zm-1.915 12.116h6.528l-.421 1.59 2.732-2.461V9.462h-8.84v6.823z" }));
}
export default LanguageRegular;
