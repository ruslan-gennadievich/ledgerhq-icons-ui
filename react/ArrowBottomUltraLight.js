import * as React from "react";
import Svg from "./StyledSvg";
function ArrowBottomUltraLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.372l6.624-6.624-.552-.552-3.216 3.216c-.816.816-1.632 1.632-2.448 2.472V2.628h-.816v17.256c-.816-.84-1.632-1.656-2.448-2.472l-3.216-3.216-.552.552L12 21.372z" }));
}
export default ArrowBottomUltraLight;
