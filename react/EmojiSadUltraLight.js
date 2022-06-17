import * as React from "react";
import Svg from "./StyledSvg";
function EmojiSadUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.719a8.73 8.73 0 01-8.719-8.72 8.729 8.729 0 018.72-8.718A8.728 8.728 0 0120.718 12 8.728 8.728 0 0112 20.719zm0-16.706A7.996 7.996 0 004.013 12 7.996 7.996 0 0012 19.987 7.996 7.996 0 0019.987 12 7.996 7.996 0 0012 4.013z" }),
        React.createElement("path", { d: "M8.74 11.194a1.217 1.217 0 100-2.434 1.217 1.217 0 000 2.434zM15.197 11.194a1.217 1.217 0 100-2.434 1.217 1.217 0 000 2.434zM15.472 15.908a3.806 3.806 0 00-3.513-2.327 3.806 3.806 0 00-3.514 2.327l-.669-.284a4.538 4.538 0 014.19-2.775 4.539 4.539 0 014.18 2.775l-.674.284z" }));
}
export default EmojiSadUltraLight;
