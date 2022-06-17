import * as React from "react";
import Svg from "./StyledSvg";
function BuyCryptoAltRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.24c5.184 0 9.24-4.2 9.24-9.24 0-5.16-4.08-9.24-9.24-9.24S2.76 6.84 2.76 12s4.08 9.24 9.24 9.24zM4.32 12c0-4.32 3.384-7.68 7.68-7.68 4.32 0 7.68 3.36 7.68 7.68 0 4.176-3.36 7.68-7.68 7.68-4.296 0-7.68-3.384-7.68-7.68zm3.96 1.416c-.024 1.848 1.272 3.168 3.168 3.384v1.176h1.128V16.8c1.824-.216 3.12-1.392 3.12-2.952 0-1.44-1.032-2.256-2.664-2.496l-1.56-.216c-1.032-.12-1.464-.456-1.464-1.272 0-1.032.72-1.416 2.016-1.416 1.44 0 1.968.504 1.968 1.824h1.488c0-1.608-1.224-2.88-2.904-3.096v-1.2h-1.128v1.176c-1.68.216-2.88 1.344-2.88 2.808 0 1.392.888 2.208 2.4 2.424l1.56.192c1.176.168 1.632.504 1.632 1.392 0 1.104-.672 1.512-2.136 1.512-1.68 0-2.28-.552-2.28-2.064H8.28z" }));
}
export default BuyCryptoAltRegular;
