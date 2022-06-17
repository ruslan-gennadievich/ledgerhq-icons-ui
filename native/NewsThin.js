import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NewsThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M5.581 20.812a2.206 2.206 0 01-1.56-.648 2.215 2.215 0 01-.646-1.563V3.188h15.118V6.69H7.787V18.6c0 .586-.233 1.148-.647 1.563a2.206 2.206 0 01-1.559.648zM3.91 3.722v14.88a1.68 1.68 0 001.672 1.675A1.672 1.672 0 007.253 18.6V6.155H17.96V3.722H3.91z" }),
        React.createElement(Path, { d: "M18.693 20.812H5.581v-.535h13.112a1.4 1.4 0 001.401-1.404V6.69h-1.868v-.535h2.402v12.718a1.94 1.94 0 01-1.935 1.939z" }),
        React.createElement(Path, { d: "M17.684 9.675h-7.599v.534h7.599v-.534zM17.684 13.365h-7.599v.535h7.599v-.535z" }));
}
export default NewsThin;
