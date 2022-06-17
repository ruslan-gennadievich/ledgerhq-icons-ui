import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function LanguageThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M16.815 14.537l.359 1.384h.462l-1.487-5.309h-.861l-1.532 5.31h.438l.383-1.385h2.238zm-.102-.358h-2.04l.879-3.19h.325l.836 3.19z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.704 14.986L2.67 10.511v-7.23h11.507v5.612h7.153v7.088l-4.937 4.738.836-3.152h-7.167v-5.77h-3.13l.772 3.19zm6.082-11.314v5.221h-3.724v.725c-.502-.04-.9-.172-1.217-.347l.075-.073c.833-.845.972-2 .994-2.462h.78v-.39H8.665v-1.19h-.39v1.19H6.246v.39h3.276c-.024.42-.158 1.457-.881 2.19a2.51 2.51 0 01-.13.123 2.393 2.393 0 01-.834-1.28l-.383.077c.097.39.28.753.533 1.065.098.122.218.25.365.375-.514.324-1.163.479-1.94.464l-.008.39h.114c.869 0 1.596-.204 2.169-.609.38.238.88.428 1.535.476v1.4H6.435l.596 2.458-3.97-3.529V3.672h10.725zm-3.333 13.504h7.284l-.609 2.296 3.809-3.657V9.284H10.453v7.892z" }));
}
export default LanguageThin;
