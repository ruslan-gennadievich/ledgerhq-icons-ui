import * as React from "react";
import Svg from "./StyledSvg";
function CoinsUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.612 21.276c3.744 0 6.624-1.224 6.624-3.168v-1.92c2.76-.312 4.776-1.44 4.776-3.072V5.868c0-1.944-2.784-3.144-6.624-3.144-3.72 0-6.648 1.176-6.648 3.144v1.968c-2.784.312-4.752 1.392-4.752 3v7.272c0 1.944 2.808 3.168 6.624 3.168zm-5.856-3.168v-2.064c1.032 1.008 3.192 1.608 5.856 1.608 2.616 0 4.8-.6 5.856-1.608v2.064c0 1.368-2.304 2.376-5.856 2.376-3.6 0-5.856-.984-5.856-2.376zm0-3.6v-2.136c1.032 1.008 3.192 1.608 5.856 1.608 2.616 0 4.8-.6 5.856-1.608v2.136c0 1.368-2.304 2.376-5.856 2.376-3.6 0-5.856-1.008-5.856-2.376zm0-3.672c0-1.368 2.328-2.376 5.856-2.376 3.648 0 5.856.984 5.856 2.376 0 1.368-2.304 2.376-5.856 2.376-3.6 0-5.856-1.008-5.856-2.376zm4.776-3.072v-.336c.12.12.264.216.408.312l-.408.024zm0-1.896c0-1.368 2.304-2.352 5.856-2.352 3.624 0 5.832.96 5.832 2.352 0 1.368-2.496 2.52-6.552 2.376-.912-.288-1.968-.456-3.096-.504-1.344-.432-2.04-1.08-2.04-1.872zm6.552 3.144c2.304-.072 4.224-.672 5.136-1.608V9.54c0 1.104-1.512 1.968-3.984 2.28v-.984c0-.72-.432-1.344-1.152-1.824zm1.152 6.384v-2.808c1.776-.192 3.216-.72 3.984-1.512v2.04c0 1.128-1.512 1.992-3.984 2.28z" }));
}
export default CoinsUltraLight;
