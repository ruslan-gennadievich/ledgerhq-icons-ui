import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function EmojiSadRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 20.719a8.729 8.729 0 01-8.719-8.72A8.728 8.728 0 0112 3.282 8.728 8.728 0 0120.718 12 8.729 8.729 0 0112 20.719zm0-16.295A7.585 7.585 0 004.424 12 7.585 7.585 0 0012 19.576 7.585 7.585 0 0019.576 12 7.585 7.585 0 0012 4.424z" }),
        React.createElement(Path, { d: "M8.82 11.214a1.187 1.187 0 100-2.374 1.187 1.187 0 000 2.374zM15.118 11.214a1.187 1.187 0 100-2.374 1.187 1.187 0 000 2.374zM15.19 15.896a3.5 3.5 0 00-5.165-1.559 3.499 3.499 0 00-1.29 1.559L7.68 15.45a4.64 4.64 0 014.284-2.837 4.64 4.64 0 014.28 2.837l-1.055.445z" }));
}
export default EmojiSadRegular;
