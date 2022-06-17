import * as React from "react";
import Svg from "./StyledSvg";
function EmojiHappyThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 20.719a8.728 8.728 0 01-8.718-8.72A8.728 8.728 0 0112 3.282 8.728 8.728 0 0120.718 12 8.728 8.728 0 0112 20.719zm0-16.991A8.281 8.281 0 003.728 12 8.282 8.282 0 0012 20.272 8.282 8.282 0 0020.272 12 8.281 8.281 0 0012 3.728z" }),
        React.createElement("path", { d: "M8.684 11.18a1.238 1.238 0 100-2.475 1.238 1.238 0 000 2.476zM15.251 11.18a1.238 1.238 0 100-2.475 1.238 1.238 0 000 2.476zM8.252 13.95a4.02 4.02 0 003.708 2.457 4.02 4.02 0 003.708-2.457l.412.174a4.468 4.468 0 01-4.12 2.73 4.467 4.467 0 01-4.12-2.73l.412-.174z" }));
}
export default EmojiHappyThin;
