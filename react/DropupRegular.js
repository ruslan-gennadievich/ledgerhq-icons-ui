import * as React from "react";
import Svg from "./StyledSvg";
function DropupRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 8.652l5.592 5.592-1.104 1.104L12 10.86l-4.488 4.488-1.104-1.104L12 8.652z" }));
}
export default DropupRegular;
