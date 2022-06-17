import * as React from "react";
import Svg from "./StyledSvg";
function NanoFoldedThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.16 20.928h16.08c1.944 0 3.6-1.632 3.6-3.624 0-1.128-.504-2.016-1.344-2.856L9.12 3.072 4.104 8.064l5.664 5.64H2.16v7.224zm.48-.48v-6.264h15.6a3.099 3.099 0 013.12 3.12c0 1.776-1.392 3.144-3.12 3.144H2.64zM4.776 8.064l4.344-4.32 10.032 10.08c-.288-.072-.6-.12-.912-.12h-7.8l-5.664-5.64zm11.52 9.24c0 .96.792 1.824 1.824 1.824.96 0 1.752-.864 1.752-1.824 0-.984-.792-1.776-1.752-1.776-1.032 0-1.824.792-1.824 1.776zm.48 0c0-.72.576-1.296 1.344-1.296.696 0 1.272.576 1.272 1.296 0 .72-.576 1.344-1.272 1.344a1.342 1.342 0 01-1.344-1.344z" }));
}
export default NanoFoldedThin;
