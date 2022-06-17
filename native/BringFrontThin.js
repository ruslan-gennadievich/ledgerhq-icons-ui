import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function BringFrontThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.96 20.88h7.92v-7.92h-2.52v.48h2.04v6.96h-6.96v-2.04h-.48v2.52zm-9.84-9.84h2.52v-.48H3.6V3.6h7.44v2.04h.48V3.12h-8.4v7.92zm4.92 4.92h7.92V8.04H8.04v7.92zm.48-.48V8.52h6.96v6.96H8.52z" }));
}
export default BringFrontThin;
