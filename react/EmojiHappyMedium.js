import * as React from "react";
import Svg from "./StyledSvg";
function EmojiHappyMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 21.36c-5.232 0-9.36-4.127-9.36-9.36 0-5.231 4.128-9.36 9.36-9.36 5.232 0 9.36 4.129 9.36 9.36 0 5.089-4.104 9.36-9.36 9.36zm0-16.8c-4.176 0-7.44 3.265-7.44 7.44 0 4.177 3.264 7.44 7.44 7.44s7.44-3.383 7.44-7.44c0-4.175-3.264-7.44-7.44-7.44z" }),
        React.createElement("path", { d: "M15.465 14a4.02 4.02 0 01-1.065 1.2c-.668.502-1.5.8-2.4.8-.9 0-1.732-.298-2.4-.8A4.02 4.02 0 018.535 14", stroke: "#000", strokeWidth: 1.92 }),
        React.createElement("circle", { cx: 9, cy: 10.25, r: 1.25 }),
        React.createElement("circle", { cx: 15, cy: 10.25, r: 1.25 }));
}
export default EmojiHappyMedium;
