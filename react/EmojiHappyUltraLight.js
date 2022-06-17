import * as React from "react";
import Svg from "./StyledSvg";
function EmojiHappyUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.719a8.73 8.73 0 01-8.719-8.72 8.729 8.729 0 018.72-8.718A8.728 8.728 0 0120.718 12 8.728 8.728 0 0112 20.719zm0-16.706A7.996 7.996 0 004.013 12 7.996 7.996 0 0012 19.987 7.996 7.996 0 0019.987 12 7.996 7.996 0 0012 4.013z" }),
        React.createElement("path", { d: "M8.74 11.194a1.217 1.217 0 100-2.434 1.217 1.217 0 000 2.434zM15.197 11.194a1.217 1.217 0 100-2.434 1.217 1.217 0 000 2.434zM8.45 13.787a3.806 3.806 0 003.514 2.327 3.806 3.806 0 003.513-2.327l.67.284a4.538 4.538 0 01-4.19 2.775 4.537 4.537 0 01-4.18-2.775l.673-.284z" }));
}
export default EmojiHappyUltraLight;