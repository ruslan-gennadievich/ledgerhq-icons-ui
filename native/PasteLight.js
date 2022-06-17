import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PasteLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M16.47 12.13h-4.804v.91h4.805v-.91zM11.666 15.982h4.805v.91h-4.805v-.91z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M4.598 18.405h3.714v2.407h11.09V8.998l-4.147-3.333h-1.014l-2.826-2.476H4.598v15.217zm3.714-12.74v11.83H5.507V4.098h5.281v1.567H8.312zm3.386 0h1.162l-1.162-1.02v1.02zm6.795 14.238H9.222V6.573h5.418V9.67h3.853v10.234zM17.656 8.76L15.55 7.067v1.691h2.106z" }));
}
export default PasteLight;
