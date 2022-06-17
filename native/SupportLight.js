import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function SupportLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.632 21.12h2.76c.696 0 1.272-.48 1.296-1.296a6.19 6.19 0 003.768-4.632h.432c1.68 0 2.952-1.296 2.952-2.952v-.96c0-1.68-1.272-2.952-2.952-2.952h-.432C17.952 5.256 15.264 2.88 12 2.88c-3.264 0-5.952 2.376-6.456 5.448h-.432C3.456 8.328 2.16 9.6 2.16 11.28v.96a2.92 2.92 0 002.952 2.952h1.536v-5.76c0-2.976 2.376-5.424 5.352-5.424 2.976 0 5.376 2.448 5.376 5.424v4.608a5.071 5.071 0 01-2.712 4.488c-.048-.696-.6-1.176-1.272-1.176h-2.76c-.768 0-1.32.552-1.32 1.32V19.8c0 .768.552 1.32 1.32 1.32zM3.24 12.24v-.96c0-1.224.648-1.872 1.872-1.872h.336v4.704h-.336c-1.224 0-1.872-.648-1.872-1.872zm7.08 7.488v-.984c0-.24.12-.384.384-.384h2.616c.24 0 .36.144.36.384v.984c0 .24-.12.36-.36.36h-2.616c-.264 0-.384-.12-.384-.36zm8.256-5.616V9.408h.312c1.224 0 1.872.648 1.872 1.872v.96c0 1.224-.648 1.872-1.872 1.872h-.312z" }));
}
export default SupportLight;
