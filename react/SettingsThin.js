import * as React from "react";
import Svg from "./StyledSvg";
function SettingsThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M14.256 21.84l.264-3.024a7.778 7.778 0 002.136-1.2l2.736 1.272 2.256-3.936-2.472-1.68c.072-.432.096-.84.096-1.272 0-.432-.024-.84-.096-1.272l2.472-1.68-2.256-3.936-2.712 1.272a7.222 7.222 0 00-2.184-1.224l-.24-3H9.744l-.24 3a6.826 6.826 0 00-2.16 1.224L4.632 5.112l-2.28 3.912 2.52 1.728A7.106 7.106 0 004.776 12c0 .432.024.84.096 1.248l-2.52 1.728 2.28 3.912 2.712-1.272a6.826 6.826 0 002.16 1.224l.24 3h4.512zM3 15.12l2.4-1.656A7.212 7.212 0 015.256 12c0-.528.048-.984.144-1.464L3 8.88l1.824-3.144L7.416 6.96a6.456 6.456 0 012.52-1.44l.24-2.88h3.648l.24 2.88c.984.288 1.8.744 2.544 1.416l2.568-1.2L21 8.904l-2.352 1.608a7.814 7.814 0 010 2.976L21 15.096l-1.824 3.168-2.592-1.224a7.114 7.114 0 01-2.52 1.44l-.24 2.88h-3.648l-.24-2.88a6.456 6.456 0 01-2.52-1.44l-2.592 1.224L3 15.12zM8.88 12A3.114 3.114 0 0012 15.12 3.114 3.114 0 0015.12 12 3.114 3.114 0 0012 8.88 3.114 3.114 0 008.88 12zm.48 0A2.632 2.632 0 0112 9.36 2.632 2.632 0 0114.64 12 2.632 2.632 0 0112 14.64 2.632 2.632 0 019.36 12z" }));
}
export default SettingsThin;
