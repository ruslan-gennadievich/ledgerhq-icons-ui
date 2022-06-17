import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ImportMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 20.4h18.72v-7.2h-1.92v5.28H4.56V13.2H2.64v7.2zm4.992-8.184L12 16.56l4.344-4.344-1.2-1.176-1.056 1.056c-.384.384-.792.816-1.176 1.248V3.6h-1.824v9.792c-.408-.456-.792-.888-1.2-1.296l-1.08-1.056-1.176 1.176z" }));
}
export default ImportMedium;
