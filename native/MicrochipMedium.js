import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function MicrochipMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M7.68 21.36h1.68V18h1.8v3.36h1.68V18h1.8v3.36h1.68V18H18v-1.68h3.36v-1.68H18v-1.8h3.36v-1.68H18v-1.8h3.36V7.68H18V6h-1.68V2.64h-1.68V6h-1.8V2.64h-1.68V6h-1.8V2.64H7.68V6H6v1.68H2.64v1.68H6v1.8H2.64v1.68H6v1.8H2.64v1.68H6V18h1.68v3.36zm.12-5.16V7.8h8.4v8.4H7.8zm2.76-2.76h2.88v-2.88h-2.88v2.88z" }));
}
export default MicrochipMedium;
