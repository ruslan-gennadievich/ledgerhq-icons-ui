import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function EntitiesMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M1.68 21.36h6v-6H5.52v-2.52h5.64v2.52H9v6h6v-6h-2.16v-2.52h5.64v2.52h-2.16v6h6v-6h-2.16v-4.2h-7.32V8.64H15v-6H9v6h2.16v2.52H3.84v4.2H1.68v6zm1.68-1.608v-2.784H6v2.784H3.36zm7.32 0v-2.784h2.64v2.784h-2.64zm0-12.72V4.248h2.64v2.784h-2.64zM18 19.752v-2.784h2.64v2.784H18z" }));
}
export default EntitiesMedium;
