import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function HandshakeUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M13.728 7.848l-2.568 2.544c-.288.288-.528.408-.816.408-.6 0-1.032-.48-1.032-1.056 0-.264.12-.552.312-.744l2.64-2.616c.36-.336.864-.552 1.344-.552h2.04c.528 0 .984.216 1.368.552l1.536 1.512c.36.36.84.552 1.344.552h2.424v-.816h-2.376c-.312 0-.6-.096-.84-.336l-1.512-1.464a2.762 2.762 0 00-1.944-.816H8.352c-.744 0-1.44.312-1.944.816L4.896 7.296c-.24.24-.504.336-.84.336H1.68v.816h2.424c.504 0 .984-.192 1.368-.552l1.536-1.512c.36-.336.84-.552 1.344-.552h3.408l-.024.024-2.64 2.616c-.336.312-.528.792-.528 1.296 0 .96.744 1.776 1.776 1.776.456 0 .888-.168 1.248-.528l1.008-1.008 4.824 4.848-2.784 2.76c-.36.336-.84.552-1.344.552h-4.2a1.89 1.89 0 01-1.32-.552L4.968 14.88a1.994 1.994 0 00-1.344-.552H1.68v.816h1.896c.336 0 .576.12.84.36l2.76 2.688c.48.48 1.176.792 1.92.792h4.2c.72 0 1.44-.312 1.92-.792l3.096-3.048h4.008v-.816h-4.368L13.128 9.48l1.128-1.104-.528-.528z" }));
}
export default HandshakeUltraLight;
